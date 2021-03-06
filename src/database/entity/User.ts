import { compare, hash } from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }

  async comparePasword(password: string): Promise<boolean> {
    return await compare(password, this.password);
  }
}

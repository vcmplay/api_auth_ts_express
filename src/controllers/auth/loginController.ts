import { User } from "@/database/entity/User";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";

export default async (req: Request, res: Response): Promise<void> => {
  const repo = getRepository(User);

  try {
    const user = await repo.findOneOrFail({ email: req.body.username });

    const isValidPassword = await user.comparePasword(req.body.password);

    if (!isValidPassword) {
      throw new Error("password");
    }

    const token = await sign({ id: user.id }, process.env.JWT_TOKEN);
    const { id, name, email } = user;
    res.json({ token, user: { id, name, email } });
  } catch (err) {
    res.status(401).json({ message: "Usuário ou senha inválido" });
  }
};

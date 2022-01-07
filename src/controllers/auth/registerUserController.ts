import { User } from "@/database/entity/User";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const repo = getRepository(User);

    const userEntity = repo.create(req.body);

    const user = await repo.save(userEntity);

    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

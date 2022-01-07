import { User } from "@/database/entity/User";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getRepository } from "typeorm";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.headers.authorization)
      throw new Error("É necessário informar o token");

    const [typeToken, accessToken] = req.headers.authorization.split(" ");

    if (typeToken !== "Bearer") throw new Error("Token não é do tipo Bearer");

    const dec: any = await verify(accessToken, process.env.JWT_TOKEN);

    if (!dec.id) throw new Error("Token com formato inválido");

    const repo = getRepository(User);

    const user = await repo.findOne({ id: dec.id });

    if (!user) throw new Error("Usuário não encontrado");

    next();
  } catch (err) {
    res.status(401).json({ message: err.message || "Não autenticado" });
  }
};

import { Request, Response } from "express";
import { sign } from 'jsonwebtoken';

export default async (req: Request, res: Response): Promise<void> => {
  const token = await sign({}, process.env.JWT_TOKEN);
  res.json({ token });
};

import authMiddleware from "@/middlewares/authMiddleware";
import { Router } from "express";

export default (router: Router): void => {
  router.get("/", authMiddleware, (_, res) => {
    res.json({ sucesso: true, message: "Rota acessada com sucesso" });
  });
};

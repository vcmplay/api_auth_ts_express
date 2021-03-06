import { Express, Router } from "express";
import indexRouter from "./index.router";
import authRouter from "./auth.router";
import privateRouter from "./private.router";

export default (app: Express): void => {
  const router = Router();
  app.use("/", router);
  indexRouter(router);

  const authRouterExpress = Router();
  router.use("/auth", authRouterExpress);
  authRouter(authRouterExpress);

  const privateRouterExpress = Router();
  router.use("/private", privateRouterExpress);
  privateRouter(privateRouterExpress);
};

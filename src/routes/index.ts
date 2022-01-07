import { Express, Router } from "express";
import indexRouter from "./index.router";

export default (app: Express): void => {
  const router = Router();
  app.use("/", router);
  indexRouter(router);
  
};

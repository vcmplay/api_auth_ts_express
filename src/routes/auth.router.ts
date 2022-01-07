import { Router } from "express";
import loginController from "../controllers/auth/loginController";

export default (router: Router): void => {
  router.post("/login", loginController);
};

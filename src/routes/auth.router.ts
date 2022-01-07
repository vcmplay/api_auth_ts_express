import registerUserController from "@/controllers/auth/registerUserController";
import { Router } from "express";
import loginController from "../controllers/auth/loginController";

export default (router: Router): void => {
  router.post("/login", loginController);
  router.post("/register", registerUserController);
};

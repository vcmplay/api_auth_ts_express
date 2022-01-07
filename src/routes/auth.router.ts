import { Router } from "express";
import { sign } from "jsonwebtoken";

export default (router: Router): void => {
  router.post("/login", async (req, res) => {
    const token = await sign({}, process.env.JWT_TOKEN);
    res.json({ token });
  });
};

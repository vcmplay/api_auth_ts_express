import { json } from "express";

export const bodyParser = json({ inflate: false });

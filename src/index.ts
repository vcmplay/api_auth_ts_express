import "reflect-metadata";
import express from 'express';
import { config as configDotenv } from 'dotenv';
import { createConnection } from "typeorm";
import initRouter from './routes';
import { bodyParser } from "./middlewares/bodyParser";

configDotenv();
createConnection();

const app = express();
app.use(bodyParser);

initRouter(app);

app.listen(process.env.PORT, () => {
    console.info(`Servidor na porta ${process.env.PORT}`);
});
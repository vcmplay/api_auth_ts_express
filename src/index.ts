import "reflect-metadata";
import express from 'express';
import { config as configDotenv } from 'dotenv';
import initRouter from './routes';

configDotenv();

const app = express();
initRouter(app);

app.listen(process.env.PORT, () => {
    console.info(`Servidor na porta ${process.env.PORT}`);
});
import * as express from 'express';
import initRouter from './routes';

const app = express();
initRouter(app);

app.listen(3333, () => {
    console.info(`Servidor na porta 3333`);
});
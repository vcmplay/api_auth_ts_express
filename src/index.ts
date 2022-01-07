import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(3333, () => {
    console.info(`Servidor na porta 3333`);
});
import express from 'express';
import router from './routes/routes.mjs';

const app = express();

app.use('/content-list', router);

app.get('/', (_, res) => {
    res.send('Welcome from the DSA end-point');
});

app.listen(3000, () => {
    console.log('Listening on http://127.0.0.1:3000');
});

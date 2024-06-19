const express = require('express');
const router = require('./routes.js');

const app = express();

app.use('/content-list', router);

app.get('/', (_, res) => {
    res.send('Welcome from the DSA end-point');
});

app.listen(3000, () => {
    console.log('Listening on http://127.0.0.2:3000');
});

import express from 'express';

const app = express();

app.use(express.static('src/client'));

app.listen(8080);

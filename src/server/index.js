import bodyParser from 'body-parser';
import {connection} from './mysql';
import express from 'express';
import {setupGraphQL} from './schema/index';

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

connection.connect(async err => {
  if (err) { throw err; }

  await setupGraphQL(app, connection);

  app.listen(8080);
});

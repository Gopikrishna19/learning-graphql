import bodyParser from 'body-parser';
import {dbConnect} from './mysql';
import express from 'express';
import {setupGraphQL} from './schema/index';

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

(async() => {

  const connection = await dbConnect();

  await setupGraphQL(app, connection);

  app.listen(8080);

})();

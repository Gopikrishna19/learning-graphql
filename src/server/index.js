import GraphQLHttp from 'express-graphql';
import Links from './schema/links';
import bodyParser from 'body-parser';
import {connection} from './mysql';
import express from 'express';

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(8080);

connection.connect(() => {

  app.use('/links', GraphQLHttp({
    schema: Links(connection)
  }));
});

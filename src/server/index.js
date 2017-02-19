import GraphQLHttp from 'express-graphql';
import Links from './schema/links';
import {connection} from './mysql';
import express from 'express';

const app = express();

app.use(express.static('dist'));

app.listen(8080);

connection.connect(() => {

  app.use('/links', GraphQLHttp({
    schema: Links(connection)
  }));
});

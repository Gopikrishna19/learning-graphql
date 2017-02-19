import GraphQLHttp from 'express-graphql';
import Links from './schema/links';
import bodyParser from 'body-parser';
import {connection} from './mysql';
import express from 'express';

const app = express();
const setupGraphQL = conn => {

  const schema = Links(conn);

  console.log('Setting up graphql ...');
  app.use('/links', GraphQLHttp({schema}));
};

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log('Connected to database ...');
connection.connect(async err => {
  if (err) { throw err; }

  setupGraphQL(connection);

  console.log('Server running at :8080 ...');
  app.listen(8080);
});

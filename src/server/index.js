import GraphQLHttp from 'express-graphql';
import {connection} from './mysql';
import express from 'express';
import schema from './data/schema';

const app = express();

app.use(express.static('dist'));

app.use('/graphql', GraphQLHttp({
  schema,
  graphiql: true
}));

app.get('/links', (req, res) => {
  console.log('Serving: /links');

  connection.query('SELECT * FROM links', (error, results, fields) => {
    const headers = {'Content-Type': 'application/json'};

    if (error) {
      res.writeHead(500, headers);
      res.end(JSON.stringify(error));
    } else {
      res.writeHead(200, headers);
      res.end(JSON.stringify(results));
    }
  });
});

app.listen(8080);

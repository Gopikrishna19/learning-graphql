import GraphQLHttp from 'express-graphql';
import Links from './store';
import fs from 'fs';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import {resolve} from 'path';

export const setupGraphQL = async(app, connection) => {

  const schema = Links(connection);
  const SchemaJSON = await graphql(schema, introspectionQuery);

  fs.writeFile(resolve('dist/schema.json'), JSON.stringify(SchemaJSON, null, 2), err => { if (err) { throw err; } });

  app.use('/links', GraphQLHttp({schema}));
};

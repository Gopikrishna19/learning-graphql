import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import Links from './links';

const getQuery = connection => new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    store: {
      type: Links(connection),
      resolve: () => ({})
    }
  })
});

export default connection => new GraphQLSchema({
  query: getQuery(connection)
});

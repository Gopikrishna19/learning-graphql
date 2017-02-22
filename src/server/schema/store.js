import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import {CreateLink} from './link';
import Links from './links';
import {globalIdField} from 'graphql-relay';

const getStore = connection => new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    id: globalIdField('Store'),
    store: {
      type: Links(connection),
      resolve: () => ({})
    }
  })
});

const getMutation = (connection, Store) => new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createLink: CreateLink(connection, Store)
  })
});

export default connection => {
  const Store = getStore(connection);
  const Mutation = getMutation(connection, Store);

  return new GraphQLSchema({
    query: Store,
    mutation: Mutation
  });
}

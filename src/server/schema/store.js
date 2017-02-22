import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import {CreateLink} from './link';
import Links from './links';

const store = {};

const getStore = (connection, LinksType) => new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    store: {
      type: LinksType,
      resolve: () => store
    }
  })
});

const getMutation = (connection, LinksType) => new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createLink: CreateLink(connection, LinksType, store)
  })
});

export default connection => {
  const LinksType = Links(connection);
  const Store = getStore(connection, LinksType);
  const Mutation = getMutation(connection, LinksType);

  return new GraphQLSchema({
    query: Store,
    mutation: Mutation
  });
}

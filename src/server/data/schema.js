import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: () => 42
      },
      message: {
        type: GraphQLString,
        resolve: () => 'GraphQL!'
      }
    })
  })
});

export default schema;

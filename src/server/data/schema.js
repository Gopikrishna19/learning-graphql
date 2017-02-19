import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';

let counter = 42;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: () => counter
      },
      message: {
        type: GraphQLString,
        resolve: () => 'GraphQL!'
      }
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'mutation',
    fields: () => ({
      incrementCounter: {
        type: GraphQLInt,
        resolve: () => ++counter
      }
    })
  })
});

export default schema;

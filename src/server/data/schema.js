import {GraphQLSchema, GraphQLObjectType, GraphQLInt} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields() {
      return {
        counter: {
          type: GraphQLInt,
          resolve() {
            return 42;
          }
        }
      }
    }
  })
});

export default schema;

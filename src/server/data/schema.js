import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';

let data = [
  {counter: 42},
  {counter: 43},
  {counter: 44}
];

const CounterType = new GraphQLObjectType({
  name: 'Counter',
  fields: () => ({
    counter: {
      type: GraphQLInt
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    data: {
      type: new GraphQLList(CounterType),
      resolve: () => data
    }
  })
});

const Schema = new GraphQLSchema({
  query: RootQuery
});

export default Schema;

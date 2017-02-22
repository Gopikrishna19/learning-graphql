import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import {connectionDefinitions} from 'graphql-relay';

const Link = new GraphQLObjectType({
  name: 'Link',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: link => `${link.id}`
    },
    title: {type: GraphQLString},
    url: {type: GraphQLString}
  })
});

export default connectionDefinitions({
  name: 'Link',
  nodeType: Link
});

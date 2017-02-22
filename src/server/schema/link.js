import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import {connectionDefinitions, mutationWithClientMutationId} from 'graphql-relay';

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

const LinkConnection = connectionDefinitions({
  name: 'Link',
  nodeType: Link
});

export const CreateLink = (connection, LinksType, store) => mutationWithClientMutationId({
  name: 'CreateLink',
  inputFields: {
    title: {type: new GraphQLNonNull(GraphQLString)},
    url: {type: new GraphQLNonNull(GraphQLString)}
  },
  outputFields: {
    link: {
      type: LinkConnection.edgeType,
      resolve: node => ({
        cursor: node.id,
        node
      })
    },
    store: {
      type: LinksType,
      resolve: () => store
    }
  },
  mutateAndGetPayload: ({title, url}) => new Promise(
    (resolve, reject) => connection.query(
      'INSERT INTO links (title, url) VALUES (?, ?)',
      [title, url],
      (error, results) => {
        if (error) {
          return reject(error);
        }

        resolve({
          id: results.insertId,
          title,
          url
        });
      }
    )
  )
});

export default LinkConnection;

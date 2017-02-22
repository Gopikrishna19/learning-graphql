import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray
} from 'graphql-relay';

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

const getQuery = connection => {

  const Links = new GraphQLObjectType({
    name: 'Links',
    fields: () => ({
      links: {
        type: LinkConnection.connectionType,
        args: connectionArgs,
        resolve: (links, args) => connectionFromPromisedArray(
          new Promise((resolve, reject) => {

            connection.query(`SELECT * FROM links LIMIT 0, ${args.first}`, (error, results) => {
              if (error) {
                return reject(error);
              }

              resolve(results);
            });
          }),
          args
        )
      }
    })
  });

  return new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      store: {
        type: Links,
        resolve: () => ({})
      }
    })
  });

};

export default connection => {

  const Store = getQuery(connection);

  return new GraphQLSchema({query: Store});

}

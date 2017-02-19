import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString} from 'graphql';

export default connection => {

  const Link = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      title: {type: GraphQLString},
      url: {type: GraphQLString}
    })
  });

  const Links = new GraphQLObjectType({
    name: 'Links',
    fields: () => ({
      links: {
        type: new GraphQLList(Link),
        resolve: () => new Promise((resolve, reject) => {

          connection.query('SELECT title, url FROM links', (error, results) => {
            if (error) {
              return reject(error);
            }

            resolve(results);
          });
        })
      }
    })
  });

  const Store = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      store: {
        type: Links,
        resolve: () => ({})
      }
    })
  });

  return new GraphQLSchema({query: Store});

}

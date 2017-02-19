import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString} from 'graphql';

export default connection => {

  const Link = new GraphQLObjectType({
    name: 'Counter',
    fields: () => ({
      id: {type: GraphQLInt},
      title: {type: GraphQLString},
      url: {type: GraphQLString}
    })
  });

  const Links = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
      links: {
        type: new GraphQLList(Link),
        resolve: () => new Promise((resolve, reject) => {

          connection.query('SELECT * FROM links', (error, results) => {
            if (error) {
              return reject(error);
            }

            resolve(results);
          });
        })
      }
    })
  });

  return new GraphQLSchema({query: Links});

}

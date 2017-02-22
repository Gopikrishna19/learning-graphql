import {connectionArgs, connectionFromPromisedArray} from 'graphql-relay';
import {GraphQLObjectType} from 'graphql';
import LinkConnection from './link';

export default connection => new GraphQLObjectType({
  name: 'Links',
  fields: () => ({
    links: {
      type: LinkConnection.connectionType,
      args: connectionArgs,
      resolve: (links, args) => connectionFromPromisedArray(
        new Promise(
          (resolve, reject) => connection.query(
            `SELECT * FROM links LIMIT 0, ${args.first}`,
            (error, results) => {
              if (error) {
                return reject(error);
              }

              resolve(results);
            }
          )
        ),
        args
      )
    }
  })
});

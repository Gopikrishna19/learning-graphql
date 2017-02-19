const {resolve} = require('path');

module.exports =
  require('babel-relay-plugin')(
    require(resolve('dist/schema.json')).data
  );

/**
 * server available at: https://back-end-jfannhybji.now.sh
 */

const merge = require('lodash.merge');
const { GraphQLServer } = require('graphql-yoga');

const movies = require('./movies');
const users = require('./users');

const server = new GraphQLServer({
  typeDefs: [movies.typeDefs, users.typeDefs].join(' '),
  resolvers: merge({}, movies.resolvers, users.resolvers),
  context: ({ request }) => {
    const isLog = users.utils.isLog(request);
    return {
      isLog
    };
  }
});

server.start({ endpoint: '/graphql' }, () =>
  console.log('Server is running on localhost:4000')
);

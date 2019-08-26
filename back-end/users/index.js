module.exports = {
  typeDefs: require('../gqlLoader')('users/users.graphql'),
  resolvers: require('./users.resolvers').Resolver,
  utils: require('./users.resolvers').utils
};

module.exports = {
    typeDefs: require('../gqlLoader')('movies/movies.graphql'),
    resolvers: require('./movies.resolvers')
};
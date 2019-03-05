const { GraphQLServer } = require('graphql-yoga');
const Mutation = ('./resolvers/Mutation');
const Query = ('./resolvers/Query');
const db = require('./db');

//Create GraphQL Yoga server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db })
  });

}

module.exports = createServer;

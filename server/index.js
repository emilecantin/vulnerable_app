const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5001).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



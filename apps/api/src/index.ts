import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './schemas';

const startServer = () => {
  const server = new ApolloServer({
    introspection: true,
    resolvers,
    typeDefs,
  });

  server.listen(8888).then(() => {
    // eslint-disable-next-line no-console
    console.log(`🚀  Server ready at http://localhost:8888/graphql`);
  });
};

startServer();

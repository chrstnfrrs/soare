import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import resolvers from './resolvers';
import typeDefs from './schemas';

const server = new ApolloServer({
  introspection: true,
  resolvers,
  typeDefs,
});

const app = express();

await server.start();

server.applyMiddleware({ app });

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log('Server started on port 30004');
  app.listen(3004);
}

export const viteApp = app;

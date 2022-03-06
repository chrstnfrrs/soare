import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8888/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;

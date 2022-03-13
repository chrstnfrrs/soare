import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let client = undefined;

const get = (): ApolloClient<NormalizedCacheObject> => {
  if (client) {
    return client;
  }

  client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.SANITY_URL,
  });

  return client;
};

export { get };

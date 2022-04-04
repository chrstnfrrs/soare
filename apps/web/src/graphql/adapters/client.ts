import { ApolloClient, InMemoryCache } from '@apollo/client';
import { $fetch } from 'ohmyfetch';

const query = async ({ query, variables = {} }) => {
  try {
    const { data, error } = await $fetch('/api/graphql', {
      baseURL: process.env.URL,
      body: {
        query,
        variables,
      },
      credentials: 'include',
      mode: 'same-origin',
      method: 'POST',
    });

    if (error) {
      throw new Error(error);
    }

    return { data, error: false };
  } catch (error) {
    return { data: {}, error };
  }
};

const client = new ApolloClient({
  credentials: 'include',
  cache: new InMemoryCache(),
  uri: 'http://localhost:3000/api/graphql',
});

export { client, query };

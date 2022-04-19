import { $fetch } from 'ohmyfetch';

const fetchQuery = async (query, { variables = {} } = {}) => {
  const res = await $fetch('http://localhost:3004/graphql', {
    method: 'POST',
    body: {
      query,
      variables,
    },
  });

  return res;
};

const fetchMutate = async (query, { variables }) => {
  const res = await $fetch('http://localhost:3004/graphql', {
    method: 'POST',
    body: {
      query,
      variables,
    },
  });

  return res;
};

export { fetchQuery as query, fetchMutate as mutate };

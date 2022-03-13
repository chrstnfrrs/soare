import { gql } from 'apollo-server';

import HelloTypes from '../../../src/schemas/hello-schema';

describe('Given the hello schema', () => {
  test('Then there should be a hello query', () => {
    expect(HelloTypes).toStrictEqual(gql`
      extend type Query {
        hello: String!
      }
    `);
  });
});

import { gql } from 'apollo-server';

import UserSchema from '../../../src/schemas/user-schema';

describe('Given the user schema', () => {
  test('Then it should match', () => {
    expect(UserSchema).toStrictEqual(gql`
      extend type Query {
        userByEmail(email: String!): User!
        users: [User]!
      }

      extend type Mutation {
        createUser(input: UserInput!): User!
      }

      input UserCredentials {
        email: String!
        password: String!
      }

      input UserInput {
        email: String!
        password: String!
        firstName: String!
        lastName: String!
      }

      type User {
        id: ID!
        email: String!
        firstName: String!
        lastName: String!
      }
    `);
  });
});

import { gql } from 'apollo-server';

const UserSchema = gql`
  extend type Query {
    users: [User]!
  }

  extend type Mutation {
    loginUser(input: UserCredentials!): User!
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
`;

export default UserSchema;

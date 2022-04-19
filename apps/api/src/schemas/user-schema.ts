import { gql } from 'apollo-server-express';

const UserSchema = gql`
  extend type Query {
    user(id: ID!): User!
    userByCredentials(input: UserCredentials!): User!
    userByEmail(email: String!): User!
    users: [User]!
  }

  extend type Mutation {
    createUser(input: UserInput!): User!
    deleteUser(id: ID!): Boolean!
    signInWithGoogle(input: GoogleUserInput!): User!
  }

  input UserCredentials {
    email: String!
    password: String!
  }

  input GoogleUserInput {
    email: String!
    firstName: String!
    lastName: String!
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

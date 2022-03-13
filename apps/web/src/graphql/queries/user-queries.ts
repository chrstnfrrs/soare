import { gql } from '@apollo/client';

const UserByCredentials = gql`
  query UserByCredentials($credentials: UserCredentials!) {
    userByCredentials(input: $credentials) {
      email
    }
  }
`;

const UserByEmail = gql`
  query UserByEmail($email: String!) {
    userByEmail(email: $email) {
      email
    }
  }
`;

const AllUsers = gql`
  query AllUsers {
    users {
      email
    }
  }
`;

export { UserByCredentials, UserByEmail, AllUsers };

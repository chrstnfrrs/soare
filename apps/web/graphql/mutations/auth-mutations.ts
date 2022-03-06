import { gql } from '@apollo/client';

const LoginMutation = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      email
    }
  }
`;

const RegisterMutation = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      email
    }
  }
`;

const AllUsers = gql`
  query Users {
    users {
      email
    }
  }
`;

export { AllUsers, LoginMutation, RegisterMutation };

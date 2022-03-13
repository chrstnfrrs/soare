import { gql } from '@apollo/client';

const RegisterUser = gql`
  mutation RegisterUser($input: UserInput!) {
    createUser(input: $input) {
      email
    }
  }
`;

export { RegisterUser };

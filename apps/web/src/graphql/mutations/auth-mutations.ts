import gql from 'graphql-tag';

const RegisterUser = gql`
  mutation RegisterUser($input: UserInput!) {
    createUser(input: $input) {
      email
    }
  }
`;

const SignInWithGoogle = `
  mutation SignInWithGoogle($input: GoogleUserInput!) {
    signInWithGoogle(input: $input) {
      email
    }
  }
`;

export { RegisterUser, SignInWithGoogle };

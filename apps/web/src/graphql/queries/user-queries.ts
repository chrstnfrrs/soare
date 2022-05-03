const UserByCredentials = `
  query UserByCredentials($input: UserCredentials!) {
    userByCredentials(input: $input) {
      id
      email
    }
  }
`;

const UserByEmail = `
  query UserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      email
      firstName
      lastName
    }
  }
`;

const User = `
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
    }
  }
`;

const AllUsers = `
  query AllUsers {
    users {
      email
    }
  }
`;

export { UserByCredentials, UserByEmail, User, AllUsers };

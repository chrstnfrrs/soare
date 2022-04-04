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
      email
    }
  }
`;

const UserById = `
  query UserById($id: ID!) {
    userById(id: $id) {
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

export { UserByCredentials, UserByEmail, UserById, AllUsers };

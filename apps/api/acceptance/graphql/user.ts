const createUser = `mutation CreateUser($input: UserInput!) {
	createUser(input: $input) {
		id
		email
		firstName
		lastName
	}
}`;

const deleteUser = `mutation DeleteUser($id: ID!) {
	deleteUser(id: $id)
}`;

const user = `query User($id: ID!) {
	user(id: $id) {
		id
		email
		firstName
		lastName
	}
}`;

const userByCredentials = `query UserByCredentials($input: UserCredentials!) {
	userByCredentials(input: $input) {
		id
		email
		firstName
		lastName
	}
}`;

const userByEmail = `query UserByEmail($email: String!) {
	userByEmail(email: $email) {
		id
		email
		firstName
		lastName
	}
}`;

const users = `query Users {
	users {
		id
		email
		firstName
		lastName
	}
}`;

const signInWithGoogle = `mutation SignInWithGoogle($input: GoogleUserInput!) {
	signInWithGoogle(input: $input) {
		id
		email
		firstName
		lastName
	}
}`;

export {
  createUser,
  deleteUser,
  user,
  userByCredentials,
  userByEmail,
  users,
  signInWithGoogle,
};

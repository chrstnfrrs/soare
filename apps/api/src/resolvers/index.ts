import * as HelloResolvers from './hello-resolvers';
import * as UserResolvers from './user-resolvers';

const resolvers = [
  {
    Query: {
      hello: HelloResolvers.get,
      users: UserResolvers.get,
      userByCredentials: UserResolvers.getByCredentials,
      userByEmail: UserResolvers.getByEmail,
      userById: UserResolvers.getById,
    },
    Mutation: {
      createUser: UserResolvers.create,
      deleteUserById: UserResolvers.deleteById,
      signInWithGoogle: UserResolvers.signInWithGoogle,
    },
  },
];

export default resolvers;

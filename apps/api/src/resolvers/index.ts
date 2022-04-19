import * as HelloResolvers from './hello-resolvers';
import * as UserResolvers from './user-resolvers';

const resolvers = [
  {
    Query: {
      hello: HelloResolvers.get,
      user: UserResolvers.getById,
      userByCredentials: UserResolvers.getByCredentials,
      userByEmail: UserResolvers.getByEmail,
      users: UserResolvers.get,
    },
    Mutation: {
      createUser: UserResolvers.create,
      deleteUser: UserResolvers.deleteById,
      signInWithGoogle: UserResolvers.signInWithGoogle,
    },
  },
];

export default resolvers;

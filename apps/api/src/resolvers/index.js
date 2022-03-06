import * as HelloResolvers from './hello-resolvers';
import * as UserResolvers from './user-resolvers';

const resolvers = [
  {
    Query: {
      hello: HelloResolvers.get,
      users: UserResolvers.get,
    },
    Mutation: {
      loginUser: UserResolvers.login,
      createUser: UserResolvers.create,
    },
  },
];

export default resolvers;

import * as HelloResolvers from './hello-resolvers';
import * as UserResolvers from './user-resolvers';

const resolvers = [
  {
    Query: {
      hello: HelloResolvers.get,
      users: UserResolvers.get,
      userByEmail: UserResolvers.getByEmail,
    },
    Mutation: {
      createUser: UserResolvers.create,
    },
  },
];

export default resolvers;

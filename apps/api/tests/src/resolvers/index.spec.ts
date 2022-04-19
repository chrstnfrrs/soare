import { vi } from 'vitest';

import resolvers from '../../../src/resolvers';
import * as HelloResolvers from '../../../src/resolvers/hello-resolvers';
import * as UserResolvers from '../../../src/resolvers/user-resolvers';

vi.mock('../../../src/resolvers/hello-resolvers');
vi.mock('../../../src/resolvers/user-resolvers');

describe('Given resolver map', () => {
  test('Then should contain all resolvers', () => {
    expect(resolvers).toStrictEqual([
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
    ]);
  });
});

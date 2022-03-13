import { gql } from '@apollo/client';

import * as AuthMutations from '../../../../src/graphql/mutations/auth-mutations';

describe('Given auth-mutations', () => {
  describe('When using RegisterUser', () => {
    test('Then mutation should use createUser and ask for email', () => {
      expect(AuthMutations.RegisterUser).toStrictEqual(gql`
        mutation RegisterUser($input: UserInput!) {
          createUser(input: $input) {
            email
          }
        }
      `);
    });
  });
});

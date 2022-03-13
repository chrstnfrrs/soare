import { gql } from '@apollo/client';

import * as UserQueries from '../../../../src/graphql/queries/user-queries';

describe('Given user-queries', () => {
  describe('When using UserByCredentials', () => {
    test('Then query should use userByCredentials and ask for email', () => {
      expect(UserQueries.UserByCredentials).toStrictEqual(gql`
        query UserByCredentials($credentials: UserCredentials!) {
          userByCredentials(input: $credentials) {
            email
          }
        }
      `);
    });
  });
  describe('When using UserByEmail', () => {
    test('Then query should use userByEmail and ask for email', () => {
      expect(UserQueries.UserByEmail).toStrictEqual(gql`
        query UserByEmail($email: String!) {
          userByEmail(email: $email) {
            email
          }
        }
      `);
    });
  });
  describe('When using AllUsers', () => {
    test('Then query should use users and ask for email', () => {
      expect(UserQueries.AllUsers).toStrictEqual(gql`
        query AllUsers {
          users {
            email
          }
        }
      `);
    });
  });
});

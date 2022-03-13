import { gql } from 'apollo-server';

import Schema from '../../../src/schemas';
import HelloSchema from '../../../src/schemas/hello-schema';
import UserSchema from '../../../src/schemas/user-schema';

describe('Given the main schema', () => {
  test('Then it should contain query', () => {
    expect(Schema).toContain(gql`
      type Query
    `);
  });
  test('Then it should contain mutation', () => {
    expect(Schema).toContain(gql`
      type Mutation
    `);
  });
  test('Then it should contain the hello schema', () => {
    expect(Schema).toContain(HelloSchema);
  });
  test('Then it should contain the user schema', () => {
    expect(Schema).toContain(UserSchema);
  });
});

import * as HelloResolvers from '../../../src/resolvers/hello-resolvers';

describe('HelloResolvers', () => {
  describe('Given get', () => {
    test('Then should return Hello World', () => {
      expect(HelloResolvers.get()).toStrictEqual('Hello World!');
    });
  });
});

import { HelloQuery } from '../graphql/hello';
import { query } from '../adapters/fetch-adapters';

describe('Given the hello schema', () => {
  describe('When the hello query is called', () => {
    test('Then should return Hello World!', async () => {
      const { data } = await query(HelloQuery);

      expect(data.hello).toStrictEqual('Hello World!');
    });
  });
});

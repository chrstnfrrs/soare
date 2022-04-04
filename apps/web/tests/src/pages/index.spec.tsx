import { vi } from 'vitest';

import { render, screen } from '../../utils/test-utils';
import Home from '../../../src/pages/index';

vi.mock('@apollo/client', () => ({
  ApolloClient: vi.fn(),
  HttpLink: vi.fn(),
}))

vi.mock('../../../src/graphql/adapters/client', () => ({
  client: vi.fn(),
  query: vi.fn(),
}))

describe('Given <Home />', () => {
  test('Then should display landing page', () => {
    render(<Home users={{}}/>);

    expect(screen.getByText('Hello World!')).toBeVisible();
  });
});


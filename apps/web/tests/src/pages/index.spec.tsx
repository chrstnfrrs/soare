import { render, screen } from '../../utils/test-utils';
import Home from '../../../src/pages/index';

describe('Given <Home />', () => {
  test('Then should display landing page', () => {
    render(<Home />);

    expect(screen.getByText('Hello World!')).toBeVisible();
  });
});

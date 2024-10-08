import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders the text component', () => {
  render(<Text content="Test Text" />);
  const textElement = screen.getByText(/Test Text/i);
  expect(textElement).toBeInTheDocument();
});

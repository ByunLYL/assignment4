import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('renders the table footer component', () => {
  render(<TableFooter>Footer Test</TableFooter>);
  const footerElement = screen.getByText(/Footer Test/i);
  expect(footerElement).toBeInTheDocument();
});

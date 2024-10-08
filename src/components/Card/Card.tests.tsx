import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders the card component with title and content', () => {
  render(<Card title="Test Title" content="Test Content" />);
  const titleElement = screen.getByText(/Test Title/i);
  const contentElement = screen.getByText(/Test Content/i);
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

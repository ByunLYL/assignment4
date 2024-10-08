import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders the HeroImage component with title', () => {
  render(<HeroImage bgImage="https://via.placeholder.com/800x400" title="Test Title" />);
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});

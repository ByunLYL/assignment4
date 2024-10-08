import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button text="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeVisible();
});

test('button is disabled', () => {
  render(<Button text="Click Me" disabled={true} />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeDisabled();
});

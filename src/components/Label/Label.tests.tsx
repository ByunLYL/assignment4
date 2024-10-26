import { render, screen } from "@testing-library/react";
import Label from "./Label";

test("renders the label component", () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeInTheDocument();
});

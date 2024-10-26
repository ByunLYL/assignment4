import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

test("renders the table header component", () => {
  render(<TableHeader>Header Test</TableHeader>);
  const headerElement = screen.getByText(/Header Test/i);
  expect(headerElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

test("renders the table row component", () => {
  render(<TableRow>Row Test</TableRow>);
  const rowElement = screen.getByText(/Row Test/i);
  expect(rowElement).toBeInTheDocument();
});

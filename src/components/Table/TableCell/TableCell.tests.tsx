import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

test("renders the table cell component", () => {
  render(<TableCell>Cell Test</TableCell>);
  const cellElement = screen.getByText(/Cell Test/i);
  expect(cellElement).toBeInTheDocument();
});

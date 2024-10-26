import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

test("renders the radio button component", () => {
  render(
    <RadioButton checked={false} label="Test Radio" onChange={() => {}} />,
  );
  const radioButtonElement = screen.getByLabelText(/Test Radio/i);
  expect(radioButtonElement).toBeInTheDocument();
});

test("radio button change event", () => {
  const handleChange = jest.fn();
  render(
    <RadioButton checked={false} label="Test Radio" onChange={handleChange} />,
  );
  const radioButtonElement = screen.getByLabelText(/Test Radio/i);
  fireEvent.click(radioButtonElement);
  expect(handleChange).toHaveBeenCalledWith(true);
});

import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

test("renders the HeroImage component with title", () => {
  render(
    <HeroImage
      bgImage="https://via.placeholder.com/800x400"
      title="Test Title"
    />,
  );
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders the HeroImage component in disabled state", () => {
  render(
    <HeroImage
      bgImage="https://via.placeholder.com/800x400"
      title="Disabled Title"
      disabled={true}
    />,
  );
  const titleElement = screen.getByText(/Disabled Title/i);
  expect(titleElement).toBeInTheDocument();

  const heroImageElement = screen.getByText(/Disabled Title/i).parentElement;
  expect(heroImageElement).toHaveStyle("opacity: 0.6");
  expect(heroImageElement).toHaveStyle("cursor: not-allowed");
});

import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders the card component with title, content, and text", () => {
  render(<Card title="Test Title" content="Test Content" text="Sample Text" />);
  const titleElement = screen.getByText(/Test Title/i);
  const contentElement = screen.getByText(/Test Content/i);
  const textElement = screen.getByText(/Sample Text/i); // 添加对 text 的测试
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument(); // 检查 text 是否渲染
});

test("renders the card in disabled state with greyed out style and not-allowed cursor", () => {
  render(
    <Card
      title="Disabled Card"
      content="Cannot click"
      text="This card is disabled"
      disabled={true}
    />,
  );
  const cardElement = screen.getByText(/Disabled Card/i).closest("div");
  expect(cardElement).toHaveStyle({
    backgroundColor: "#f0f0f0",
    cursor: "not-allowed",
    opacity: "0.6",
  });
});

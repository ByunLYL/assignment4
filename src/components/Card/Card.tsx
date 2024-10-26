import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1em;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ title, content, text, disabled }) => {
  return (
    <StyledCard disabled={disabled}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <p>{text}</p> {/* 显示 text 属性 */}
    </StyledCard>
  );
};

export default Card;

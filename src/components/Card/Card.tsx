import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1em;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </StyledCard>
  );
};

export default Card;

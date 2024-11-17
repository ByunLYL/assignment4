import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#fff')};
  color: ${({ disabled }) => (disabled ? '#999' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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

const CardImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechItem = styled.li`
  background: #eef;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
`;

const ExternalLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Card: React.FC<CardProps> = ({ title, content, text, disabled, additionalInfo }) => {
  return (
    <StyledCard disabled={disabled}>
      {additionalInfo?.image && <CardImage src={additionalInfo.image} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <p>{text}</p>
      {additionalInfo?.techList && (
        <TechList>
          {additionalInfo.techList.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>
      )}
      {additionalInfo?.link && (
        <ExternalLink href={additionalInfo.link} target="_blank" rel="noopener noreferrer">
          Learn More
        </ExternalLink>
      )}
    </StyledCard>
  );
};

export default Card;

import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ bgImage: string }>`
  height: 400px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HeroImage: React.FC<HeroImageProps> = ({ bgImage, title }) => {
  return (
    <StyledHeroImage bgImage={bgImage}>
      <h1>{title}</h1>
    </StyledHeroImage>
  );
};

export default HeroImage;

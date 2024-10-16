import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<{ bgImage: string; disabled?: boolean }>`
  height: 400px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; /* 根据 disabled 状态调整透明度 */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')}; /* 根据 disabled 状态调整光标 */
`;

const HeroImage: React.FC<HeroImageProps> = ({ bgImage, title, disabled }) => {
  return (
    <StyledHeroImage bgImage={bgImage} disabled={disabled}>
      <h1>{title}</h1>
    </StyledHeroImage>
  );
};

export default HeroImage;

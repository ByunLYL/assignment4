import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImage = styled.img<{ rounded?: boolean }>`
  max-width: 100%;
  height: auto;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '0')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, rounded }) => {
  return <StyledImage src={src} alt={alt} rounded={rounded} />;
};

export default Img;

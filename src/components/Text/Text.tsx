import React from 'react'
import styled from 'styled-components'
import { TextProps } from './Text.types'

const StyledText = styled.p`
  font-size: 16px;
  color: #555;
`

const Text: React.FC<TextProps> = ({ content }) => {
  return <StyledText>{content}</StyledText>
}

export default Text

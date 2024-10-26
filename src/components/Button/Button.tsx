import React from 'react'
import styled from 'styled-components'
import { ButtonProps } from './Button.types'

// Styled component for the button
const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'blue')};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'gray' : 'darkblue')};
  }
`

// Button component
const Button: React.FC<ButtonProps> = ({ text, disabled = false }) => {
  return <StyledButton disabled={disabled}>{text}</StyledButton>
}

export default Button

import React from 'react'
import styled from 'styled-components'
import { RadioButtonProps } from './RadioButton.types'

const StyledRadioButton = styled.input`
  margin-right: 8px;
`

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label>
      <StyledRadioButton
        type="radio"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  )
}

export default RadioButton

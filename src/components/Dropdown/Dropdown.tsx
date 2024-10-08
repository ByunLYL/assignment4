import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  return (
    <StyledSelect onChange={(e) => onSelect(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;

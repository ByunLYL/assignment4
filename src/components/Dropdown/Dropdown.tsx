import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, disabled }) => {
  return (
    <StyledSelect
      onChange={(e) => onSelect(e.target.value)}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;

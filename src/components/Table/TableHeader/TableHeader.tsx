import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledTableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;

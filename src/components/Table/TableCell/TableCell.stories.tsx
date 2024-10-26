import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TableCell from "./TableCell";
import { TableCellProps } from "./TableCell.types";

export default {
  title: "Components/TableCell",
  component: TableCell,
} as Meta;

const Template: StoryFn<TableCellProps> = (args) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: "Sample Cell",
};

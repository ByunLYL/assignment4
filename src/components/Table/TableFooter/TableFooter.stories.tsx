import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TableFooter from "./TableFooter";
import { TableFooterProps } from "./TableFooter.types";

export default {
  title: "Components/TableFooter",
  component: TableFooter,
} as Meta;

const Template: StoryFn<TableFooterProps> = (args) => (
  <table>
    <TableFooter {...args} />
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
      </tr>
    </>
  ),
};

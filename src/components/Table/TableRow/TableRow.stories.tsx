import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TableRow from './TableRow'
import { TableRowProps } from './TableRow.types'

export default {
  title: 'Components/TableRow',
  component: TableRow,
} as Meta

const Template: StoryFn<TableRowProps> = (args) => (
  <table>
    <tbody>
      <TableRow {...args} />
    </tbody>
  </table>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <td>Row 1 Column 1</td>
      <td>Row 1 Column 2</td>
    </>
  ),
}

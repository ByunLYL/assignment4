import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TableHeader from './TableHeader'
import { TableHeaderProps } from './TableHeader.types'

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
} as Meta

const Template: StoryFn<TableHeaderProps> = (args) => (
  <table>
    <TableHeader {...args} />
  </table>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </>
  ),
}

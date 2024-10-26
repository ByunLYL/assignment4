import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Text from './Text'
import { TextProps } from './Text.types'

export default {
  title: 'Components/Text',
  component: Text,
} as Meta

const Template: StoryFn<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'This is a text component',
}

import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Card from './Card'
import { CardProps } from './Card.types'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta

const Template: StoryFn<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Card Title',
  content:
    'This is a sample card content that describes the card in more detail.',
  text: 'Additional text', // 确保传递 text 属性
}

export const Disabled = Template.bind({})
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled and cannot be clicked.',
  text: 'disabled text.', // 确保传递 text 属性
  disabled: true,
}

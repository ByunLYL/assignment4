import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import RadioButton from './RadioButton'
import { RadioButtonProps } from './RadioButton.types'

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  label: 'Option 1',
  onChange: (checked: boolean) => console.log(`Selected: ${checked}`),
}

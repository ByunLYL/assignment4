import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => <Button text="Click Me" disabled={false} />
export const Disabled = () => <Button text="Click Me" disabled={true} />

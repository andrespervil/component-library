import React from 'react'
import Button from './Button'

export default {
  title: 'atoms/Button',
  args: {
    size: 'medium',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'text', 'rounded', 'square', 'negative'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = { type: 'primary', label: 'Primary' }

export const Secondary = Template.bind({})
Secondary.args = { type: 'secondary', label: 'Secondary' }

export const Outlined = Template.bind({})
Outlined.args = { type: 'outlined', label: 'Outlined' }

export const Text = Template.bind({})
Text.args = { type: 'text', label: 'Text' }

export const Rounded = Template.bind({})
Rounded.args = { type: 'rounded', label: 'Rounded' }

export const Square = Template.bind({})
Square.args = { type: 'square', label: 'Square' }

export const Negative = Template.bind({})
Negative.args = { type: 'negative', label: 'Negative' }

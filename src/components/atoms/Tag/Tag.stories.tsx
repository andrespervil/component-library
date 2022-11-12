import React from 'react'
import Tag from './Tag'

export default {
  title: 'atoms/Tag',
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      type: { name: 'string', required: false },
      control: {
        type: 'color',
      },
    },
    border: {
      type: { name: 'boolean', required: false },
      control: 'boolean',
    },
  },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Tag {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = { label: 'Default' }

export const Small = Template.bind({})
Small.args = { size: 'small', label: 'Small' }

export const Medium = Template.bind({})
Medium.args = { size: 'medium', label: 'Medium' }

export const Large = Template.bind({})
Large.args = { type: 'large', label: 'Large' }

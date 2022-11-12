import * as React from 'react'

// Generated with util/create-component.js
export interface ButtonProps {
  label: string
  type?: 'primary' | 'secondary' | 'outlined' | 'text' | 'rounded' | 'square' | 'negative'
  size?: 'small' | 'medium' | 'large'
  onClick: React.MouseEventHandler
  disabled?: boolean
  icon?: JSX.Element
  onlyIcon?: boolean
}

// Generated with util/create-component.js
interface CloseProps {
  onClick: React.MouseEventHandler
  position?: 'left' | 'right'
}

export interface TagProps {
  label: string
  border?: boolean
  icon?: JSX.Element
  color?: string
  size?: 'small' | 'medium' | 'large'
  close?: CloseProps
}

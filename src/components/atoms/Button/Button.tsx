import React from 'react'

import { ButtonProps } from './Button.types'

import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'primary',
  size = 'medium',
  onClick = () => {},
  disabled,
  withIcon,
  onlyIcon,
}) => (
  <button className={`${styles[type]} ${styles[size]}`} onClick={onClick} disabled={disabled}>
    {label}
  </button>
)

export default Button

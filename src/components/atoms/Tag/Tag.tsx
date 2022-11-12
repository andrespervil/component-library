import React from 'react'

import { TagProps } from './Tag.types'

import { calculateColor } from '../../../utils/colors'

import styles from './Tag.module.scss'

const Tag: React.FC<TagProps> = ({
  label,
  border,
  icon,
  color = '#E9DFFC',
  size = 'medium',
  close,
}) => {
  const fontColor = calculateColor(color, 60)
  const accentColor = calculateColor(color, 80)

  console.log({
    a: calculateColor('#90ffe2', 50),
    b: calculateColor('#90ffe2', 150),
  })

  return (
    <div className={styles.content}>
      <div
        data-size={size}
        data-border={border}
        style={{ backgroundColor: color, color: fontColor, borderColor: accentColor }}
      >
        {label}
      </div>
    </div>
  )
}

export default Tag

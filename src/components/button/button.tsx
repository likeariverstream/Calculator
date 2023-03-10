import React from 'react'
import styles from './style.module.css'
import { ButtonType } from '../../types/types'

export function Button({
  value, onClick, children, width = '72', backgroundColor, disabled = true, color,
}: ButtonType) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={{ width, backgroundColor, color }}
      disabled={disabled}
    >
      {children}
      {value}
    </button>
  )
}

import React from 'react'
import styles from './style.module.css'
import { ButtonType } from '../../types/types'

export function Button({
  value, onClick, children, width = '72', height = '48', backgroundColor, color, borderColor, disabled = false,
}: ButtonType) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={{
        width, height, backgroundColor, color, borderColor,
      }}
      disabled={disabled}
    >
      {children}
      {value}
    </button>
  )
}

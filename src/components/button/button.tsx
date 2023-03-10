import React from 'react'
import styles from './style.module.css'
import { ButtonType } from '../../types/types'
// import { useAppSelector } from '../../store/hooks'

export function Button({
  value, onClick, children, width = '72', height = '48', backgroundColor, color, borderColor,
}: ButtonType) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={{
        width, height, backgroundColor, color, borderColor,
      }}
    >
      {children}
      {value}
    </button>
  )
}

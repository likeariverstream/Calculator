import React from 'react'
import styles from './style.module.css'

type TButton = {
  value: string
  onClick: () => void
  children?: React.ReactElement | undefined
  width?: string | undefined
  backgroundColor?: string | undefined
  disabled?: boolean
}
export function Button({
  value, onClick, children, width = '72', backgroundColor, disabled = true,
}: TButton) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={{ width, backgroundColor }}
      disabled={disabled}
    >
      {children}
      {value}
    </button>
  )
}

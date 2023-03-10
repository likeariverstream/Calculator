import React from 'react'

export const enum DragItems {
    digits = 'digits',
    equal = 'equal',
    operators = 'operators',
    display = 'dysplay',
    component = 'component'
}

export type ComponentType = {
    id?: string
}

export type ButtonType = {
  value: string
  onClick: () => void
  children?: React.ReactElement | undefined
  width?: string | undefined
  backgroundColor?: string | undefined
  color?: string | undefined
  disabled?: boolean
}

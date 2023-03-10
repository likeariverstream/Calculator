import React from 'react'

export enum DragItems {
    digits = 'digits',
    equal = 'equal',
    operators = 'operators',
    display = 'dysplay',
    component = 'component'
}

export type ComponentType = {
    id?: string
    onDoubleClick?: () => void
}

export type ButtonType = {
  value: string
  onClick: () => void
  children?: React.ReactElement | undefined
  width?: string | undefined
  height?: string | undefined
  backgroundColor?: string | undefined
  color?: string | undefined
  borderColor?: string | undefined
  disabled?: boolean
}

export type ImageType = {
  color?: string | undefined
}

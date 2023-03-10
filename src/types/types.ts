import React from 'react'

export type CalculatorState = {
  digits: string
  operator: string
  result: number
  memory: number
}
export type ConstructorState = {
  list: string[]
  isRuntime: boolean
}

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
    opacity?: number | undefined
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

export type Digits = {
  id: number
  value: string
}[]

import { createSlice } from '@reduxjs/toolkit'
import { calculate } from '../utils/calculate'

type InitialState = {
  digits: string
  operator: string
  result: number
  memory: number
}

const initialState: InitialState = {
  digits: '0',
  operator: '',
  result: 0,
  memory: 0,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDigit: (state, { payload }) => {
      if (!state.result) {
        state.digits = '0'
        state.result = 1
      }
      if (state.digits.includes('.') && payload === ',') {
        return
      }
      if (state.digits === '0' && payload !== ',') {
        state.digits = payload
      } else if (payload >= 0 && payload <= 9) {
        state.digits = state.digits.concat(payload)
      } else if (payload === ',') {
        state.digits = state.digits.concat('.')
      }
    },
    setOperator: (state, { payload }) => {
      state.result = Number(state.digits)
      if (state.operator) {
        const { memory, operator, result } = state
        state.digits = `${calculate({ memory, operator, result })}`
        state.memory = Number(state.digits)
        state.operator = payload
        state.result = 0
      }
      if (!state.operator) {
        state.operator = payload
        state.memory = state.result
        state.result = 0
      }
    },
    calculateResult: (state) => {
      state.result = Number(state.digits)
      const { memory, operator, result } = state
      state.digits = `${calculate({ memory, operator, result })}`
      state.memory = Number(state.digits)
      state.operator = ''
      state.result = 0
    },
  },
})

export const {
  setDigit,
  setOperator,
  calculateResult,
} = calculatorSlice.actions

export default calculatorSlice.reducer

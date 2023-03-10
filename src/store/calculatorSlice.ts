import { createSlice } from '@reduxjs/toolkit'
import { CalculatorState } from '../types/types'
import { calculate } from '../utils/calculate'

const initialState: CalculatorState = {
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
      if (state.digits.length > 12) {
        state.digits = Number(state.digits).toString().slice(0, 13)
      }
    },
    setOperator: (state, { payload }) => {
      state.result = Number(state.digits)
      if (state.operator) {
        const { memory, operator, result } = state
        state.digits = `${calculate({ memory, operator, result })}`
        if (state.digits.length > 12) {
          state.digits = Number(state.digits).toString().slice(0, 13)
        }
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
      if (state.digits.length > 12) {
        state.digits = Number(state.digits).toString().slice(0, 13)
      }
      state.memory = Number(state.digits)
      state.operator = ''
      state.result = 0
    },
    clearCalculator: (state) => {
      state.digits = initialState.digits
      state.operator = initialState.operator
      state.result = initialState.result
      state.memory = initialState.memory
    },
  },
})

export const {
  setDigit,
  setOperator,
  calculateResult,
  clearCalculator,
} = calculatorSlice.actions

export default calculatorSlice.reducer

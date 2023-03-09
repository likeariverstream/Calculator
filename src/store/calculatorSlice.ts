import { createSlice } from '@reduxjs/toolkit'
import { calculate } from '../utils/calculate'

type InitialState = {
  digits: string
  operator: string
  result: number
}

const initialState: InitialState = {
  digits: '',
  operator: '',
  result: 0,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDigit: (state, { payload }) => {
      if (state.digits.includes('.') && payload === ',') {
        return
      }
      if (state.digits === initialState.digits && (payload === ',' || payload === '0')) {
        return
      }
      if (!state.digits.includes('.') && payload === ',') {
        state.digits = state.digits.concat('.')
      }
      if (payload !== ',') {
        state.digits = state.digits.concat(payload)
      }
    },
    setOperator: (state, { payload }) => {
      state.result = Number(state.digits)
      state.operator = payload
      state.digits = initialState.digits
    },
    setResult: (state) => {
      state.result = Number(state.digits)
    },
    calculateResult: (state) => {
      const { digits, operator, result } = state
      state.result = calculate({ digits, operator, result })
    },
  },
})

export const {
  setDigit,
  setOperator,
  setResult,
  calculateResult,
} = calculatorSlice.actions

export default calculatorSlice.reducer

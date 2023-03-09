import { configureStore } from '@reduxjs/toolkit'
import calculatorSlice from './calculatorSlice'
import constructorSlice from './constructorSlice'

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    construction: constructorSlice,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

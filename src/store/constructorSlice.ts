import { createSlice } from '@reduxjs/toolkit'
import { swap } from '../utils/swap'
import { DragItems } from '../types/types'

type InitialState = {
  list: string[]
  isRuntime: boolean
}
const initialState: InitialState = {
  list: [],
  isRuntime: false,
}
export const constructorSlice = createSlice({
  name: 'construction',
  initialState,
  reducers: {
    addComponent: (state, { payload }) => {
      try {
        if (typeof payload === 'string' && !state.list.includes(payload)) {
          state.list.push(payload)
        }
      } catch (err) {
        console.warn(`Error: ${err}`)
      }
    },
    deleteComponent: (state, { payload }) => {
      state.list = state.list.filter((item) => item !== payload)
    },
    setIsRuntime: (state, { payload }) => {
      const count = Object.values(DragItems).length - 1
      if (state.list.length === count) {
        state.isRuntime = payload
      }
    },
    moveComponent: (state, { payload }) => {
      const { draggedId, id } = payload

      if (draggedId === id) {
        return
      }
      if (draggedId !== id) {
        const { list } = state
        state.list = swap({ list, draggedId, id })
      }
    },
  },
})

export const {
  addComponent, deleteComponent, moveComponent, setIsRuntime,
} = constructorSlice.actions

export default constructorSlice.reducer

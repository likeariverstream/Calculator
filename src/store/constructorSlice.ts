import { createSlice } from '@reduxjs/toolkit'
import { swap } from '../utils/swap'

type InitialState = {
  list: string[]
}
const initialState: InitialState = {
  list: [],
}
export const constructorSlice = createSlice({
  name: 'construction',
  initialState,
  reducers: {
    addComponent: (state, { payload }) => {
      if (!state.list.includes(payload)) {
        state.list = state.list.concat(payload)
      }
    },
    deleteComponent: (state, { payload }) => {
      state.list = state.list.filter((item) => item !== payload)
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

export const { addComponent, deleteComponent, moveComponent } = constructorSlice.actions

export default constructorSlice.reducer

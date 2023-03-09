import { createSlice } from '@reduxjs/toolkit'

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
        state.list = [...state.list, payload]
      }
    },
    deleteComponent: (state, { payload }) => {
      state.list = state.list.filter((item) => item !== payload)
    },
    moveComponent: (state, { payload }) => {
      const { dragIndex, hoverIndex } = payload

      if (dragIndex === hoverIndex) {
        return
      }
      state.list = [
        ...state.list.slice(0, dragIndex),
        ...state.list.slice(dragIndex + 1, hoverIndex + 1),
        state.list[dragIndex],
        ...state.list.slice(hoverIndex + 1),
      ]
      // let res = []
      // const { dragIndex, hoverIndex } = payload

      // if (dragIndex === hoverIndex) {
      //   return state
      // } if (dragIndex > hoverIndex) {
      //   res = [
      //     ...state.list.slice(0, hoverIndex),
      //     state.list[dragIndex],
      //     ...state.list.slice(hoverIndex, dragIndex),
      //     ...state.list.slice(dragIndex + 1),
      //   ]
      // } else {
      //   res = [
      //     ...state.list.slice(0, dragIndex),
      //     ...state.list.slice(dragIndex + 1, hoverIndex + 1),
      //     state.list[dragIndex],
      //     ...state.list.slice(hoverIndex + 1),
      //   ]
      // }
      // return {
      //   ...state,
      //   list: res,
      // }
    },
  },
})

export const { addComponent, deleteComponent, moveComponent } = constructorSlice.actions

export default constructorSlice.reducer

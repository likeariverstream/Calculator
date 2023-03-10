import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Main } from '../main/main'

export function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Main />
    </DndProvider>
  )
}

import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DragItems } from '../types/types'
import { useAppDispatch } from '../store/hooks'
import { moveComponent } from '../store/constructorSlice'

export const useDragAndDrop = (id: string | undefined) => {
  const dispatch = useAppDispatch()
  const ref = React.useRef(null)
  const [{ isDragging, handlerId }, connectDrag] = useDrag({
    type: DragItems.component,
    item: { id },
    collect: (monitor) => {
      const result = {
        handlerId: monitor.getHandlerId(),
        isDragging: monitor.isDragging(),
      }
      return result
    },
  })

  const [{ isOver, canDrop }, connectDrop] = useDrop({
    accept: DragItems.component,
    hover({ id: draggedId }: { id: string; type: string }) {
      if (draggedId !== id) {
        dispatch(moveComponent({ draggedId, id }))
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  connectDrag(ref)
  connectDrop(ref)

  return {
    ref, isDragging, handlerId, isOver, canDrop,
  }
}

import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styles from './style.module.css'
import { DragItems } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addComponent, deleteComponent, moveComponent } from '../../store/constructorSlice'
import { Display } from '../display/display'
import { Digits } from '../digits/digits'
import { Equal } from '../equal/equal'
import { Operators } from '../operators/operators'

export function Constructor() {
  const dispatch = useAppDispatch()
  const handleClick = (element: string) => {
    dispatch(deleteComponent(element))
  }
  const { list } = useAppSelector((state) => state.construction)
  const [{ isOver }, dropTarget] = useDrop(() => ({
    accept: [DragItems.display, DragItems.digits, DragItems.equal, DragItems.operators],
    drop: (item: { id: string }) => dispatch(addComponent(item.id)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))
  const [id, setId] = React.useState('')
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

  const [, connectDrop] = useDrop({
    accept: DragItems.component,
    hover({ id: draggedId }: { id: string; type: string }) {
      console.log(id)
      console.log(draggedId)
      if (draggedId !== id) {
        moveComponent({ draggedId, id })
      }
    },
  })

  connectDrag(ref)
  connectDrop(ref)
  return (
    <section className={`${styles.construction} ${isOver && styles.over}`} ref={dropTarget}>
      {list.includes(DragItems.display) && <div onClick={() => handleClick(DragItems.display)}><Display /></div>}
      {list.map((item) => {
        if (item === DragItems.digits) {
          return (
            <div
              style={{ opacity: isDragging ? 0.5 : 1 }}
              ref={ref}
              data-handler-id={handlerId}
              onDrag={() => setId(item)}
              onClick={() => handleClick(item)}
              id={item}
            >
              <Digits />
            </div>
          )
        }
        if (item === DragItems.equal) {
          return (
            <div
              style={{ opacity: isDragging ? 0.5 : 1 }}
              ref={ref}
              data-handler-id={handlerId}
              onDrag={() => setId(item)}
              onClick={() => handleClick(item)}
              id={item}
            >
              <Equal />
            </div>
          )
        }
        if (item === DragItems.operators) {
          return (
            <div
              style={{ opacity: isDragging ? 0.5 : 1 }}
              ref={ref}
              data-handler-id={handlerId}
              onDrag={() => setId(item)}
              onClick={() => handleClick(item)}
              id={item}
            >
              <Operators />
            </div>
          )
        }
        return false
      })}
    </section>
  )
}

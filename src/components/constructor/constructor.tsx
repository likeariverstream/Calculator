import React from 'react'
import { useDrop } from 'react-dnd'
import styles from './style.module.css'
import { DragItems } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addComponent, deleteComponent } from '../../store/constructorSlice'
import { Display } from '../display/display'
import { Digits } from '../digits/digits'
import { Equal } from '../equal/equal'
import { Operators } from '../operators/operators'

export function Constructor() {
  const dispatch = useAppDispatch()
  const { list, isRuntime } = useAppSelector((state) => state.construction)
  const handleDoubleClick = (element: string) => {
    if (!isRuntime) {
      dispatch(deleteComponent(element))
    }
  }
  const [{ isOver }, dropTarget] = useDrop(() => ({
    accept: [DragItems.display, DragItems.digits, DragItems.equal, DragItems.operators],
    drop: (item: { id: string }) => dispatch(addComponent(item.id)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  return (
    <section className={`${styles.construction} ${isOver && styles.over}`} ref={dropTarget}>
      {list.includes(DragItems.display) && (
      <Display
        onDoubleClick={() => handleDoubleClick(DragItems.display)}
      />
      )}
      {list.map((item) => {
        if (item === DragItems.digits) {
          return (
            <Digits
              id={item}
              key={item}
              onDoubleClick={() => handleDoubleClick(item)}
            />
          )
        }
        if (item === DragItems.equal) {
          return (
            <Equal
              id={item}
              key={item}
              onDoubleClick={() => handleDoubleClick(item)}
            />
          )
        }
        if (item === DragItems.operators) {
          return (
            <Operators
              id={item}
              key={item}
              onDoubleClick={() => handleDoubleClick(item)}
            />
          )
        }
        return false
      })}
    </section>
  )
}

import React from 'react'
import { useDrop } from 'react-dnd'
import styles from './style.module.css'
import { DragItems } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addComponent } from '../../store/constructorSlice'
import { Display } from '../display/display'
import { Digits } from '../digits/digits'
import { Equal } from '../equal/equal'
import { Operators } from '../operators/operators'

export function Constructor() {
  const dispatch = useAppDispatch()
  // const handleClick = (element: string) => {
  //   dispatch(deleteComponent(element))
  // }
  const { list } = useAppSelector((state) => state.construction)
  const [{ isOver }, dropTarget] = useDrop(() => ({
    accept: [DragItems.display, DragItems.digits, DragItems.equal, DragItems.operators],
    drop: (item: { id: string }) => dispatch(addComponent(item.id)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  return (
    <section className={`${styles.construction} ${isOver && styles.over}`} ref={dropTarget}>
      {list.includes(DragItems.display) && <Display />}
      {list.map((item) => {
        if (item === DragItems.digits) {
          return <Digits id={item} key={item} />
        }
        if (item === DragItems.equal) {
          return <Equal id={item} key={item} />
        }
        if (item === DragItems.operators) {
          return <Operators id={item} key={item} />
        }
        return false
      })}
    </section>
  )
}

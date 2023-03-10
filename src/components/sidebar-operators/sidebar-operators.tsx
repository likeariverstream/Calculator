import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setOperator } from '../../store/calculatorSlice'
import { DragItems } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function SidebarOperators() {
  const dispatch = useAppDispatch()
  const { list, isRuntime } = useAppSelector((state) => state.construction)
  const { isOver } = useDragAndDrop(DragItems.operators)
  const [, dragRef] = useDrag(() => ({
    type: DragItems.operators,
    item: {
      id: DragItems.operators,
    },
    collect: (monitor) => ({
      didDrop: !!monitor.didDrop(),
    }),
  }), [])
  const handleClick = (value: string) => {
    dispatch(setOperator(value))
  }

  const operatorsRef = list.includes(DragItems.operators) ? null : dragRef
  const opacity = list.includes(DragItems.operators) ? 0.5 : 1
  const cursor = list.includes(DragItems.operators) ? 'default' : 'move'
  return (
    <section
      className={`${styles.operators} ${isOver && styles.drop}`}
      ref={operatorsRef}
      style={{ cursor, opacity }}
      id={DragItems.operators}
    >
      {operators.map((item) => {
        if (item.value !== '=') {
          return (
            <Button
              value={item.value}
              onClick={() => handleClick(item.value)}
              key={item.id}
              disabled={!isRuntime}
            />
          )
        }
        return false
      })}
    </section>
  )
}

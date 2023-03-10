import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setOperator } from '../../store/calculatorSlice'
import { DragItems, ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function SidebarOperators({ id, onDoubleClick, opacity = 1 }: ComponentType) {
  const dispatch = useAppDispatch()
  const { list, isRuntime } = useAppSelector((state) => state.construction)
  const { isOver } = useDragAndDrop(id)
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
  return (
    <section
      className={`${styles.operators} ${isOver && styles.drop}`}
      ref={operatorsRef}
      onDoubleClick={onDoubleClick}
      style={{ cursor: isRuntime ? 'default' : 'move', opacity }}
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

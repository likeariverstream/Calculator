import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setOperator } from '../../store/calculatorSlice'
import { DragItems, ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function Operators({ id, onDoubleClick }: ComponentType) {
  const dispatch = useAppDispatch()
  const { list, isRuntime } = useAppSelector((state) => state.construction)
  const { ref, isOver } = useDragAndDrop(id)
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

  const operatorsRef = list.includes(DragItems.operators) ? ref : dragRef
  return (
    <section
      className={`${styles.operators} ${isOver && styles.drop}`}
      ref={isRuntime ? null : operatorsRef}
      onDoubleClick={onDoubleClick}
    >
      {operators.map((item) => {
        if (item.value !== '=') {
          return <Button value={item.value} onClick={() => handleClick(item.value)} key={item.id} />
        }
        return false
      })}
    </section>
  )
}

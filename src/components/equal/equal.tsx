import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { calculateResult } from '../../store/calculatorSlice'
import { DragItems, ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function Equal({ id, onDoubleClick }: ComponentType) {
  const dispatch = useAppDispatch()
  const { list, isRuntime } = useAppSelector((state) => state.construction)
  const { ref, isOver } = useDragAndDrop(id)

  const [, dragRef] = useDrag(() => ({
    type: DragItems.equal,
    item: {
      id: DragItems.equal,
    },
    collect: (monitor) => ({
      didDrop: !!monitor.didDrop(),
    }),
  }), [])

  const handleClick = () => {
    dispatch(calculateResult())
  }
  const equalRef = list.includes(DragItems.equal) ? ref : dragRef
  return (
    <section
      className={`${styles.equal} ${isOver && styles.drop}`}
      style={isOver ? { border: '1px solid #5D5FEF' } : {}}
      ref={isRuntime ? null : equalRef}
      onDoubleClick={onDoubleClick}
    >
      {operators.map((item) => {
        if (item.value === '=') {
          return (
            <Button
              value={item.value}
              onClick={handleClick}
              key={item.id}
              width="232px"
              backgroundColor="#5D5FEF"
              color="#FFFFFF"
            />
          )
        }
        return false
      })}
    </section>
  )
}

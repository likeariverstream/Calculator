import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { calculateResult } from '../../store/calculatorSlice'
import { DragItems, ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'
import { colors } from '../../data/colors'

export function Equal({ id, onDoubleClick, opacity = 1 }: ComponentType) {
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
      style={{ border: isOver ? `1px solid ${colors.irisColor}` : '', cursor: isRuntime ? 'default' : 'move', opacity }}
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
              backgroundColor={colors.irisColor}
              color={colors.whiteColor}
            />
          )
        }
        return false
      })}
    </section>
  )
}

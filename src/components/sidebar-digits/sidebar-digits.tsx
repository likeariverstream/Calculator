import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { Button } from '../button/button'
import { digits } from '../../data/data'
import { setDigit } from '../../store/calculatorSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { DragItems, ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function SidebarDigits({ id, onDoubleClick, opacity = 1 }: ComponentType) {
  const { list, isRuntime } = useAppSelector((state) => state.construction)
  const { isOver } = useDragAndDrop(id)
  const dispatch = useAppDispatch()
  const [, dragRef] = useDrag(() => ({
    type: DragItems.digits,
    item: {
      id: DragItems.digits,
    },
    collect: (monitor) => ({
      didDrop: !!monitor.didDrop(),
    }),
  }), [])
  const handleClick = (value: string) => {
    dispatch(setDigit(value))
  }
  const digitsRef = list.includes(DragItems.digits) ? null : dragRef

  return (
    <section
      className={`${styles.digits} ${isOver && styles.drop}`}
      ref={digitsRef}
      onDoubleClick={onDoubleClick}
      style={{ cursor: isRuntime ? 'default' : 'move', opacity }}
    >
      {
        digits.map((item) => {
          if (item.value === '0') {
            return (
              <Button
                value={item.value}
                onClick={() => handleClick(item.value)}
                key={item.id}
                width="152px"
                disabled={!isRuntime}
              />
            )
          }
          return (
            <Button
              value={item.value}
              onClick={() => handleClick(item.value)}
              key={item.id}
              disabled={!isRuntime}
            />
          )
        })
      }
    </section>
  )
}

import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { Button } from '../button/button'
import { digits } from '../../data/data'
import { setDigit } from '../../store/calculatorSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { DragItems } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function SidebarDigits() {
  const { list, isRuntime } = useAppSelector((state) => state.construction)
  const { isOver } = useDragAndDrop(DragItems.digits)
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
  const opacity = list.includes(DragItems.digits) ? 0.5 : 1
  const cursor = list.includes(DragItems.digits) ? 'default' : 'move'
  return (
    <section
      className={`${styles.digits} ${isOver && styles.drop}`}
      ref={digitsRef}
      style={{ cursor, opacity }}
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

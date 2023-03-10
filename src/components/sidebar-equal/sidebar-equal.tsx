import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { calculateResult } from '../../store/calculatorSlice'
import { DragItems } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'
import { colors } from '../../data/colors'

export function SidebarEqual() {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => state.construction)
  const { isOver } = useDragAndDrop(DragItems.equal)

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
  const equalRef = list.includes(DragItems.equal) ? null : dragRef
  const opacity = list.includes(DragItems.equal) ? 0.5 : 1
  const cursor = list.includes(DragItems.equal) ? 'default' : 'move'
  const border = isOver ? `1px solid ${colors.irisColor}` : ''
  return (
    <section
      className={`${styles.equal} ${isOver && styles.drop}`}
      style={{ border, cursor, opacity }}
      ref={equalRef}
      id={DragItems.equal}
    >
      {operators.map((item) => {
        if (item.value === '=') {
          return (
            <Button
              value={item.value}
              onClick={handleClick}
              key={item.id}
              width="232px"
              height="64px"
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

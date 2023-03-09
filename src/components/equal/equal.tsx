import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { calculateResult } from '../../store/calculatorSlice'
import { DragItems } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

type ComponentType = {
  id?: string
}
export function Equal({ id }: ComponentType) {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => state.construction)
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
  return (
    <section
      className={`${styles.operators} ${isOver && styles.drop}`}
      style={isOver ? { border: '1px solid #5D5FEF' } : {}}
      ref={list.includes(DragItems.equal) ? ref : dragRef}
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
            />
          )
        }
        return false
      })}
    </section>
  )
}

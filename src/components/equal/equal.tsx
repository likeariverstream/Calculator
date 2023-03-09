import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch } from '../../store/hooks'
import { calculateResult } from '../../store/calculatorSlice'
import { DragItems } from '../../types/types'

export function Equal() {
  const dispatch = useAppDispatch()
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
    <section className={styles.operators} ref={dragRef}>
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

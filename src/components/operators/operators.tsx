import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch } from '../../store/hooks'
import { setOperator } from '../../store/calculatorSlice'
import { DragItems } from '../../types/types'

export function Operators() {
  const dispatch = useAppDispatch()
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
  return (
    <section className={styles.operators} ref={dragRef}>
      {operators.map((item) => {
        if (item.value !== '=') {
          return <Button value={item.value} onClick={() => handleClick(item.value)} key={item.id} />
        }
        return false
      })}
    </section>
  )
}

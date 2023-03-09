import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setOperator } from '../../store/calculatorSlice'
import { DragItems } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

type ComponentType = {
  id?: string
}
export function Operators({ id }: ComponentType) {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => state.construction)
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
  return (
    <section
      className={`${styles.operators} ${isOver && styles.drop}`}
      ref={list.includes(DragItems.operators) ? ref : dragRef}
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

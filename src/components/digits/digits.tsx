import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { Button } from '../button/button'
import { digits } from '../../data/data'
import { setDigit } from '../../store/calculatorSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { DragItems } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

type ComponentType = {
  id?: string
}

export function Digits({ id }: ComponentType) {
  const { list } = useAppSelector((state) => state.construction)
  const { ref, isOver } = useDragAndDrop(id)
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

  return (
    <section
      className={`${styles.digits} ${isOver && styles.drop}`}
      ref={list.includes(DragItems.digits) ? ref : dragRef}
    >
      {
        digits.map((item) => {
          if (item.value === '0') {
            return <Button value={item.value} onClick={() => handleClick(item.value)} key={item.id} width="152px" />
          }
          return <Button value={item.value} onClick={() => handleClick(item.value)} key={item.id} />
        })
      }
    </section>
  )
}

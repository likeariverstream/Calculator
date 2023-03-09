import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { useAppSelector } from '../../store/hooks'
import { DragItems } from '../../types/types'

export function Display() {
  const { result, digits } = useAppSelector((state) => state.calculator)
  const [, dragRef] = useDrag(() => ({
    type: DragItems.display,
    item: {
      id: DragItems.display,
    },
    collect: (monitor) => ({
      didDrop: !!monitor.didDrop(),
    }),
  }), [])
  return (
    <section className={styles.display} ref={dragRef}>
      <input className={styles.input} value={result === Infinity ? 'Не определено' : (`${result}` || digits)} />
    </section>
  )
}

import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { useAppSelector } from '../../store/hooks'
import { DragItems, ComponentType } from '../../types/types'

export function Display({ id }: ComponentType) {
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
    <section className={styles.display} ref={dragRef} id={id}>
      <input
        className={styles.input}
        value={result === Infinity ? 'Не определено' : (`${result}` || digits)}
        readOnly
      />
    </section>
  )
}

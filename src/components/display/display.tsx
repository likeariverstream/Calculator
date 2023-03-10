import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { useAppSelector } from '../../store/hooks'
import { DragItems, ComponentType } from '../../types/types'

export function Display({ id, onDoubleClick }: ComponentType) {
  const { result, digits } = useAppSelector((state) => state.calculator)
  const { list } = useAppSelector((state) => state.construction)
  const [, dragRef] = useDrag(() => ({
    type: DragItems.display,
    item: {
      id: DragItems.display,
    },
    collect: (monitor) => ({
      didDrop: !!monitor.didDrop(),
    }),
  }), [])

  const displayRef = list.includes(DragItems.display) ? null : dragRef

  return (
    <section
      className={styles.display}
      ref={displayRef}
      id={id}
      onDoubleClick={onDoubleClick}
    >
      <input
        className={styles.input}
        value={result === Infinity ? 'Не определено' : digits}
        readOnly
      />
    </section>
  )
}

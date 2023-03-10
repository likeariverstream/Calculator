import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { useAppSelector } from '../../store/hooks'
import { DragItems, ComponentType } from '../../types/types'

export function Display({ id, onDoubleClick, opacity = 1 }: ComponentType) {
  const { result, digits } = useAppSelector((state) => state.calculator)
  const { list, isRuntime } = useAppSelector((state) => state.construction)
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
      <div
        className={styles.container}
        style={{ cursor: isRuntime ? 'default' : 'move', opacity }}
      >
        <span className={styles.value}>{result === Infinity ? 'Не определено' : digits}</span>
      </div>
    </section>
  )
}

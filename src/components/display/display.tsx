import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './style.module.css'
import { useAppSelector } from '../../store/hooks'
import { DragItems, ComponentType } from '../../types/types'

export function Display({ id, onDoubleClick, opacity = 1 }: ComponentType) {
  const { memory, digits } = useAppSelector((state) => state.calculator)
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
  const cursor = (isRuntime || list.includes(DragItems.display)) ? 'default' : 'move'
  return (
    <section
      className={styles.display}
      ref={displayRef}
      id={id}
      onDoubleClick={onDoubleClick}
    >
      <div
        className={styles.container}
        style={{ cursor, opacity }}
      >
        <span className={`${styles.value} ${digits !== '0' && styles.nonzero}`}>
          {memory === Infinity ? 'Не определено' : digits}

        </span>
      </div>
    </section>
  )
}

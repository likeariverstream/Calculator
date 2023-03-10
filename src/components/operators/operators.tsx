import React from 'react'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setOperator } from '../../store/calculatorSlice'
import { ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function Operators({ id, onDoubleClick, opacity = 1 }: ComponentType) {
  const dispatch = useAppDispatch()
  const { isRuntime } = useAppSelector((state) => state.construction)
  const { ref, isOver, handlerId } = useDragAndDrop(id)
  const handleClick = (value: string) => {
    dispatch(setOperator(value))
  }

  const operatorsRef = isRuntime ? null : ref
  return (
    <section
      className={`${styles.operators} ${isOver && styles.drop}`}
      ref={isRuntime ? null : operatorsRef}
      onDoubleClick={onDoubleClick}
      style={{ cursor: isRuntime ? 'default' : 'move', opacity }}
      data-handler-id={handlerId}
    >
      {operators.map((item) => {
        if (item.value !== '=') {
          return (
            <Button
              value={item.value}
              onClick={() => handleClick(item.value)}
              key={item.id}
              disabled={!isRuntime}
            />
          )
        }
        return false
      })}
    </section>
  )
}

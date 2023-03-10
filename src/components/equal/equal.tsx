import React from 'react'
import styles from './style.module.css'
import { operators } from '../../data/data'
import { Button } from '../button/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { calculateResult } from '../../store/calculatorSlice'
import { ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'
import { colors } from '../../data/colors'

export function Equal({ id, onDoubleClick, opacity = 1 }: ComponentType) {
  const dispatch = useAppDispatch()
  const { isRuntime } = useAppSelector((state) => state.construction)
  const { ref, isOver, handlerId } = useDragAndDrop(id)

  const handleClick = () => {
    dispatch(calculateResult())
  }
  const equalRef = isRuntime ? null : ref
  return (
    <section
      className={`${styles.equal} ${isOver && styles.drop}`}
      style={{ border: isOver ? `1px solid ${colors.irisColor}` : '', cursor: isRuntime ? 'default' : 'move', opacity }}
      ref={equalRef}
      onDoubleClick={onDoubleClick}
      data-handler-id={handlerId}
    >
      {operators.map((item) => {
        if (item.value === '=') {
          return (
            <Button
              value={item.value}
              onClick={handleClick}
              key={item.id}
              width="232px"
              height="64px"
              backgroundColor={colors.irisColor}
              color={colors.whiteColor}
            />
          )
        }
        return false
      })}
    </section>
  )
}

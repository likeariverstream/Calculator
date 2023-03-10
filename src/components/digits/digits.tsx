import React from 'react'
import styles from './style.module.css'
import { Button } from '../button/button'
import { digits } from '../../data/data'
import { setDigit } from '../../store/calculatorSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ComponentType } from '../../types/types'
import { useDragAndDrop } from '../../utils/hooks'

export function Digits({ id, onDoubleClick, opacity = 1 }: ComponentType) {
  const { isRuntime } = useAppSelector((state) => state.construction)
  const { ref, isOver, handlerId } = useDragAndDrop(id)
  const dispatch = useAppDispatch()
  const handleClick = (value: string) => {
    dispatch(setDigit(value))
  }
  const constructorRef = isRuntime ? null : ref

  return (
    <section
      className={`${styles.digits} ${isOver && styles.drop}`}
      ref={constructorRef}
      onDoubleClick={onDoubleClick}
      style={{ cursor: isRuntime ? 'default' : 'move', opacity }}
      data-handler-id={handlerId}
    >
      {
        digits.map((item) => {
          if (item.value === '0') {
            return (
              <Button
                value={item.value}
                onClick={() => handleClick(item.value)}
                key={item.id}
                width="152px"
                disabled={!isRuntime}
              />
            )
          }
          return (
            <Button
              value={item.value}
              onClick={() => handleClick(item.value)}
              key={item.id}
              disabled={!isRuntime}
            />
          )
        })
      }
    </section>
  )
}

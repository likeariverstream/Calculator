import React from 'react'
import styles from './style.module.css'
import { Digits } from '../digits/digits'
import { Operators } from '../operators/operators'
import { Equal } from '../equal/equal'
import { Display } from '../display/display'
import { DragItems } from '../../types/types'
import { useAppSelector } from '../../store/hooks'

export function Sidebar() {
  const { list } = useAppSelector((state) => state.construction)

  return (
    <section className={styles.sidebar}>
      <Display id={DragItems.display} opacity={list.includes(DragItems.display) ? 0.5 : 1} />
      <Operators id={DragItems.operators} opacity={list.includes(DragItems.operators) ? 0.5 : 1} />
      <Digits id={DragItems.digits} opacity={list.includes(DragItems.digits) ? 0.5 : 1} />
      <Equal id={DragItems.equal} opacity={list.includes(DragItems.equal) ? 0.5 : 1} />
    </section>
  )
}

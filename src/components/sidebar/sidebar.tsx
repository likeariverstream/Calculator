import React from 'react'
import styles from './style.module.css'
import { Digits } from '../digits/digits'
import { Operators } from '../operators/operators'
import { Equal } from '../equal/equal'
import { Display } from '../display/display'
import { DragItems } from '../../types/types'

export function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Display id={DragItems.display} />
      <Operators id={DragItems.operators} />
      <Digits id={DragItems.digits} />
      <Equal id={DragItems.equal} />
    </section>
  )
}

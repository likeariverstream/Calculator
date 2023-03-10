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
      <div className={styles.wrapper}><Display id={DragItems.display} /></div>
      <div className={styles.wrapper}><Operators id={DragItems.operators} /></div>
      <div className={styles.wrapper}><Digits id={DragItems.digits} /></div>
      <div className={styles.wrapper}><Equal id={DragItems.equal} /></div>
    </section>
  )
}

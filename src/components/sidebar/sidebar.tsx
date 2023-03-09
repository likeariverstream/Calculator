import React from 'react'
import styles from './style.module.css'
import { Digits } from '../digits/digits'
import { Operators } from '../operators/operators'
import { Equal } from '../equal/equal'
import { Display } from '../display/display'

export function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Display />
      <Operators />
      <Digits />
      <Equal />
    </section>
  )
}

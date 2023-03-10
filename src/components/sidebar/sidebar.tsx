import React from 'react'
import styles from './style.module.css'
import { SidebarDigits } from '../sidebar-digits/sidebar-digits'
import { SidebarOperators } from '../sidebar-operators/sidebar-operators'
import { SidebarEqual } from '../sidebar-equal/sidebar-equal'
import { Display } from '../display/display'

export function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Display />
      <SidebarOperators />
      <SidebarDigits />
      <SidebarEqual />
    </section>
  )
}

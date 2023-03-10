import React from 'react'
import styles from './style.module.css'
import { SidebarDigits } from '../sidebar-digits/sidebar-digits'
import { SidebarOperators } from '../sidebar-operators/sidebar-operators'
import { SidebarEqual } from '../sidebar-equal/sidebar-equal'
import { Display } from '../display/display'
import { DragItems } from '../../types/types'
import { useAppSelector } from '../../store/hooks'

export function Sidebar() {
  const { list } = useAppSelector((state) => state.construction)
  return (
    <section className={styles.sidebar}>
      <Display opacity={list.includes(DragItems.display) ? 0.5 : 1} />
      <SidebarOperators />
      <SidebarDigits />
      <SidebarEqual />
    </section>
  )
}

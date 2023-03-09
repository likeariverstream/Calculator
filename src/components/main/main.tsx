import React from 'react'
import styles from './style.module.css'
import { Sidebar } from '../sidebar/sidebar'
import { Calculator } from '../calculator/calculator'

export function Main() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Calculator />
    </main>
  )
}

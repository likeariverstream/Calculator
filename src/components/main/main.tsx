import React from 'react'
import styles from './style.module.css'
import { Sidebar } from '../sidebar/sidebar'
import { Calculator } from '../calculator/calculator'
import { useAppSelector } from '../../store/hooks'

export function Main() {
  const { isRuntime } = useAppSelector((state) => state.construction)
  return (
    <main className={styles.main}>
      {!isRuntime && <Sidebar />}
      <Calculator />
    </main>
  )
}

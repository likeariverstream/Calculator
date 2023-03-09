import React from 'react'
// import styles from './style.module.css'
import { DropZone } from '../dropzone/dropzone'
import { useAppSelector } from '../../store/hooks'
import { Constructor } from '../constructor/constructor'

export function Calculator() {
  const { list } = useAppSelector((state) => state.construction)

  return (
    (list.length > 0 ? <Constructor /> : <DropZone />)
  )
}

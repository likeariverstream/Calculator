import React from 'react'
import { useDrop } from 'react-dnd'
import styles from './style.module.css'
import { DropZoneImage } from '../images/dropzone-image'
import { DragItems } from '../../types/types'
import { useAppDispatch } from '../../store/hooks'
import { addComponent } from '../../store/constructorSlice'

export function DropZone() {
  const dispatch = useAppDispatch()
  const handleDrop = (id: string) => {
    dispatch(addComponent(id))
  }

  const [{ isOver }, dropTarget] = useDrop(() => ({
    accept: [DragItems.display, DragItems.digits, DragItems.equal, DragItems.operators],
    drop: (item: {id: string}) => handleDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  return (
    <section className={`${styles.dropzone} ${isOver && styles.over}`} ref={dropTarget}>
      <DropZoneImage />
      <p className={styles.description}>Перетащите сюда</p>
      <p className={styles.text}>любой элемент из левой панели</p>
    </section>
  )
}

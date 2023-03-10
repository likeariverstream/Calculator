import React from 'react'
import styles from './style.module.css'
import { Button } from '../button/button'
import { ConstructorImage } from '../images/constructor-image'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIsRuntime } from '../../store/constructorSlice'
import { RuntimeImage } from '../images/runtime-image'

export function Header() {
  const dispatch = useAppDispatch()
  const { isRuntime } = useAppSelector((state) => state.construction)
  const handleRuntimeButtonClick = () => {
    dispatch(setIsRuntime(true))
  }
  const handleConstructorButtonClick = () => {
    dispatch(setIsRuntime(false))
  }
  return (
    <header className={styles.header}>
      <Button
        value="Runtime"
        onClick={handleRuntimeButtonClick}
        width="133px"
        height="33px"
        disabled={false}
        backgroundColor={isRuntime ? '#FFFFFF' : '#F3F4F6'}
        borderColor={isRuntime ? '#E2E3E5' : '#F3F4F6'}
      >
        <RuntimeImage color={isRuntime ? '#5D5FEF' : '#000000'} />
      </Button>
      <Button
        value="Constructor"
        onClick={handleConstructorButtonClick}
        width="133px"
        height="33px"
        disabled={false}
        backgroundColor={!isRuntime ? '#FFFFFF' : '#F3F4F6'}
        borderColor={!isRuntime ? '#E2E3E5' : '#F3F4F6'}
      >
        <ConstructorImage color={!isRuntime ? '#5D5FEF' : '#000000'} />
      </Button>

    </header>
  )
}

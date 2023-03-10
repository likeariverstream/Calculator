import React from 'react'
import styles from './style.module.css'
import { Button } from '../button/button'
import { ConstructorImage } from '../images/constructor-image'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIsRuntime } from '../../store/constructorSlice'
import { RuntimeImage } from '../images/runtime-image'
import { clearCalculator } from '../../store/calculatorSlice'
import { colors } from '../../data/colors'

export function Header() {
  const dispatch = useAppDispatch()
  const { isRuntime } = useAppSelector((state) => state.construction)
  const handleRuntimeButtonClick = () => {
    dispatch(setIsRuntime(true))
  }
  const handleConstructorButtonClick = () => {
    dispatch(clearCalculator())
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
        backgroundColor={isRuntime ? colors.whiteColor : colors.lightGrayColor}
        borderColor={isRuntime ? colors.grayColor : colors.lightGrayColor}
        color={colors.darkGrayColor}
      >
        <RuntimeImage color={isRuntime ? colors.irisColor : colors.darkGrayColor} />
      </Button>
      <Button
        value="Constructor"
        onClick={handleConstructorButtonClick}
        width="133px"
        height="33px"
        disabled={false}
        backgroundColor={!isRuntime ? colors.whiteColor : colors.lightGrayColor}
        borderColor={!isRuntime ? colors.grayColor : colors.lightGrayColor}
        color={colors.darkGrayColor}
      >
        <ConstructorImage color={!isRuntime ? colors.irisColor : colors.darkGrayColor} />
      </Button>

    </header>
  )
}

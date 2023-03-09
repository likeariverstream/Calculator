type Calculate = {
    digits: string
    operator: string
    result: number
}

export function calculate({ digits, operator, result }:Calculate): number {
  if (operator === '-') {
    return result - Number(digits)
  }
  if (operator === '+') {
    return result + Number(digits)
  }
  if (operator === 'x') {
    return result * Number(digits)
  }
  if (operator === '/') {
    return result / Number(digits)
  }
  return 0
}

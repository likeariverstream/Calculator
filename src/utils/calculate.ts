type Calculate = {
  memory: number
  operator: string
  result: number
}

export function calculate({ memory, operator, result }: Calculate): number {
  if (operator === '-') {
    return memory - result
  }
  if (operator === '+') {
    return memory + result
  }
  if (operator === 'x') {
    return memory * result
  }
  if (operator === '/') {
    return memory / result
  }
  return 0
}

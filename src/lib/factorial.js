const factorial = (num) => {
  if (num === 1) {
    return 1
  }

  let m = 1
  for (let i = 2; i <= num; i++) {
    m *= i
  }

  return m
}
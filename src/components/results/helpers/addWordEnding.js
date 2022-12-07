export function addWordEnding(layovers) {
  const lastDigit = layovers % 10
  const base = 'пересад'
  let ending = ''
  // eslint-disable-next-line no-debugger
  // debugger
  if (lastDigit === 0 || lastDigit > 4) ending = `ок`
  if (lastDigit === 1) ending = `ка`
  if (lastDigit > 1 && lastDigit < 5) ending = `ки`

  return layovers ? `${lastDigit} ${base}${ending}` : `без ${base}${ending}`
}

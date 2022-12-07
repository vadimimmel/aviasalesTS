export function getSortingCallback(param) {
  const cheepest = (a, b) => a.price - b.price
  const fastest = (a, b) => a.duration - b.duration
  const getLucky = (a, b) => {
    return a.price * Math.random() - b.price * Math.random()
  }
  const sorting = {
    cheepest,
    fastest,
    getLucky,
  }

  return sorting[param]
}

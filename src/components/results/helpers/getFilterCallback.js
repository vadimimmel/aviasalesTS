export function getFilterCallback(layoverFilter) {
  const layovers = []
  layoverFilter.forEach((filt) => {
    const { status, filterValue } = filt
    if (filterValue !== null && status === true) {
      layovers.push(filterValue)
    }
  })

  return (ticket) => {
    const { segments } = ticket

    return segments.every((s) => {
      const quantity = s.stops.length
      return layovers.includes(quantity)
    })
  }
}

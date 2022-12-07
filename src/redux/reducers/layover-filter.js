import { SET_LAYOVER_FILTER } from '../actions'

const initialState = [
  { id: 'all', value: 'Все', status: true, filterValue: null },
  { id: 'direct', value: 'Без пересадок', status: true, filterValue: 0 },
  { id: 'oneLayover', value: '1 пересадка', status: true, filterValue: 1 },
  { id: 'twoLayovers', value: '2 пересадки', status: true, filterValue: 2 },
  { id: 'threeLayovers', value: '3 пересадки', status: true, filterValue: 3 },
]

export function layoverFilter(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LAYOVER_FILTER:
      return changeFilter(state, payload)
    default:
      return state
  }
}

function changeFilter(state, filterID) {
  const { length } = state
  const { status } = state.find((filter) => filter.id === filterID)
  const checked = state.reduce((value, filter) => {
    return filter.status ? ++value : value
  }, 0)
  const checkedAll = () => {
    return state.map((filter) => ({ ...filter, status: !status }))
  }

  if (filterID === 'all') {
    return checkedAll()
  }

  if (checked === length) {
    return state.map((filter) => {
      if (filter.id === 'all' || filter.id === filterID) {
        return { ...filter, status: false }
      }
      return filter
    })
  }

  if (checked === length - 2 && !status) {
    return checkedAll()
  }

  return state.map((filter) => {
    const { id, status } = filter
    return id === filterID ? { ...filter, status: !status } : filter
  })
}

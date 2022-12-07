import { FETCH_TICKETS_SUCCESS } from '../actions'

export function tickets(state = [], { type, payload }) {
  switch (type) {
    case FETCH_TICKETS_SUCCESS:
      return [...state, ...payload]
    default:
      return state
  }
}

import { SET_TICKET_SORTING } from '../actions'

export function ticketSorting(state = 'cheepest', { type, payload }) {
  switch (type) {
    case SET_TICKET_SORTING:
      return payload
    default:
      return state
  }
}

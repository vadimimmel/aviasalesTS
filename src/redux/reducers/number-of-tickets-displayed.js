import { ADD_TICKETS_DISPLAYED } from '../actions'

export function numberOfTicketsDisplayed(state = 5, { type, payload }) {
  switch (type) {
    case ADD_TICKETS_DISPLAYED:
      return state + payload
    default:
      return state
  }
}

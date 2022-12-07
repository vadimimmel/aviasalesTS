import { FETCH_TICKETS_FAILURE } from '../actions'

export function error(state = null, { type, payload }) {
  switch (type) {
    case FETCH_TICKETS_FAILURE:
      return payload
    default:
      return state
  }
}

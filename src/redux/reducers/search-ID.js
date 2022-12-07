import { FETCH_SEARCH_ID } from '../actions'

export function searchID(state = null, { type, payload }) {
  switch (type) {
    case FETCH_SEARCH_ID:
      return payload
    default:
      return state
  }
}

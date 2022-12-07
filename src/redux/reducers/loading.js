import { SET_LOADING } from '../actions'

export function loading(state = true, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return payload
    default:
      return state
  }
}

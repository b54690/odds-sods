import { FETCH_DETAILED_PAGE } from '../actions/pages'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_DETAILED_PAGE:
      return action.payload

    default:
      return state
  }
}

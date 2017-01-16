import { AUTHENTICATED } from './action-creators/constants'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED: return action.user
    default: return state
  }
}

export default authReducer

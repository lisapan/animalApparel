import { INITIALIZE_USERS, CREATE_USER } from './action-creators/constants'

export default function userReducer (user = {}, action) {
  switch (action.type) {

    case INITIALIZE_USERS:
      return action.user

    case CREATE_USER:
      return action.user

    default:
      return user
  }
}

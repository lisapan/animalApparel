import { INITIALIZE_USERS, CREATE_USER } from './action-creators/constants'

export default function userReducer (users = [], action) {
  switch (action.type) {

    case INITIALIZE_USERS:
      return action.users;

    case CREATE_USER:
      return [action.user, ...users];

    default:
      return users;
  }
}

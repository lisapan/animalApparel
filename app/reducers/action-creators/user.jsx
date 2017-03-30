import axios from 'axios'
import { INITIALIZE_USERS, CREATE_USER } from './constants'

/* ------------     ACTION CREATORS     ------------------ */
export const initUser = users => ({
  type: INITIALIZE_USERS,
  loading: true,
  users
})

export const createUser = user => ({
  type: CREATE_USER,
  loading: true,
  user
})

/* ------------     THUNKS     ------------------ */
export const fetchUsers = () => {
  return dispatch => {
    return axios.get('/api/users')
    .then(res => dispatch(initUser(res.data)))
    .catch(console.error)
  }
}

export const addUser = newUser => {
  return dispatch => {
    return axios.post('/api/users', newUser)
    .then(res => dispatch(createUser(res.data)))
    .catch(err => console.error(`Creating user: ${newUser} unsuccesful`, err))
  }
}

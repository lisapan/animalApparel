import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTHENTICATED, CREATE_USER } from './constants'

/* ------------     ACTION CREATORS     ------------------ */

export const authenticated = user => ({
  type: AUTHENTICATED,
  loading: false,
  user
})

export const createUser = () => ({
  type: CREATE_USER,
  loading: true
})

/* ------------     THUNKS     ------------------ */

export const whoami = () => dispatch => {
  return axios.get('/api/auth/whoami')
  .then(res => {
    const user = res.data
    dispatch(authenticated(user))
  })
  .catch(failed => dispatch(authenticated()))
}

//Sign in
export const login = (username, password) => dispatch => {
  return axios.post('/api/auth/local/login', {username, password})
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))
}

export const loginAndGoToHome = (username, password) => dispatch => {
  dispatch(login(username, password))
  .then(response => browserHistory.push('/home'))
  .catch(err => console.error('Could not authenticate user\n', err))
}

// Sign up
export const creatingUser = newUser => dispatch => {
  dispatch(createUser())
  return axios.post('/api/users', newUser)
  .then((res) => dispatch(whoami()))
  .catch(err => {
    console.error(`Could not create user: ${newUser.name}`)
    dispatch(whoami())
  })
}

export const createUserAndGoToHome = newUser => dispatch => {
  dispatch(creatingUser(newUser))
  .then(response => browserHistory.push('/home'))
  .catch(err => console.error(`Could not create user: ${newUser.name}\n`, err))
}

export const logout = () => dispatch => {
  return axios.post('/api/auth/logout')
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))
}

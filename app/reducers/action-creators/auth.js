import axios from 'axios'
import { browserHistory } from 'react-router';
import { AUTHENTICATED } from './constants'

/* ------------     ACTION CREATORS     ------------------ */

export const authenticated = user => ({
  type: AUTHENTICATED,
  loading: false,
  user
})

/* ------------     THUNKS     ------------------ */

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
    .then(response => {
      const user = response.data
      dispatch(authenticated(user))
    })
    .catch(failed => dispatch(authenticated(null)))

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login', {username, password})
    .then(() => dispatch(whoami()))
    .catch(() => dispatch(whoami()))

export const loginAndGoToHome = (username, password) => dispatch => {
  dispatch(login(username, password))
  .then(response => browserHistory.push(`/`))
  .catch(err => console.error('problem loggin in:', err))
}

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
    .then(() => dispatch(whoami()))
    .catch(() => dispatch(whoami()))

// export const signup = credentials => dispatch => {
//   return axios.post('/api/auth', credentials)
//   .then(res => res.data)
//   .then(user => {
//     dispatch(createUser(user));
//     dispatch(set(user));
//     return user;
//   })
// }

// export const signupAndGoToUser = credentials => dispatch => {
//   dispatch(signup(credentials))
//   .then(user => browserHistory.push(`/users/${user.id}`))
//   .catch(err => console.error('Problem fetching current user', err))
// }

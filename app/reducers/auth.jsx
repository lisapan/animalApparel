import axios from 'axios'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

// export const signup = credentials => dispatch => {
//   return axios.post('/api/auth', credentials)
//   .then(resToData)
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
export default reducer

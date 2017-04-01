'use strict'

import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTHENTICATED, CREATE_USER } from './constants'
import { receiveCart } from './cart'

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

export const checkForCart = () => dispatch => {
  return axios.get('/api/auth/cart')
  .then(res => {
    const cart = res.data
    if (cart) dispatch(receiveCart(cart))
  })
}

//Sign in
export const login = (username, password) => dispatch => {
  return axios.post('/api/auth/login/local', {username, password})
  .then(() => dispatch(whoami()))
  .catch(() => dispatch(whoami()))
}

export const loginAndGoToHome = (username, password) => dispatch => {
  dispatch(login(username, password))
  .then(res => dispatch(checkForCart()))
  .then(cart => {
    if (cart) dispatch(receiveCart(cart))
    browserHistory.push('/home')
  })
  .catch(err => console.error(`Could not authenticate user\n${err}`))
}

// Sign up
export const createUserAndGoToHome = newUser => dispatch => {
  dispatch(createUser())
  return axios.post('/api/users', newUser)
  .then(response => dispatch(loginAndGoToHome(newUser.email, newUser.password)))
  .catch(err => console.error(`Could not create user: ${newUser.name}\n${err}`))
}

// Sign out
export const logout = () => dispatch => {
  return axios.post('/api/auth/logout')
  .then(() => {
    dispatch(receiveCart({}))
    dispatch(whoami())
  })
  .catch(() => dispatch(whoami()))
}

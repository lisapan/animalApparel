import React from 'react'

export const Login = ({ loginAndGoToHome }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    loginAndGoToHome(evt.target.username.value, evt.target.password.value)
  } }>
    <div className="form-group">
      <label>email</label>
      <input
        name="username"
        type="email"
        className="form-control"
        required
      />
    </div>
    <div className="form-group">
      <label>password</label>
      <input
        name="password"
        type="password"
        className="form-control"
        required
      />
    </div>
    <button type="submit" className="btn btn-block btn-primary">Login</button>
  </form>
)

import {loginAndGoToHome} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {loginAndGoToHome},
) (Login)

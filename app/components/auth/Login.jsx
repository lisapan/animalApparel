import React from 'react'
import { loginAndGoToHome } from 'APP/app/reducers/action-creators/auth'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

const Login = ({ loginAndGoToHome }) => (
  <Col xs={12} sm={12} md={6} lg={6} className="login">
    <h2>Sign In</h2>
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
  </Col>
)

export default connect(
  state => ({}),
  {loginAndGoToHome}
)(Login)

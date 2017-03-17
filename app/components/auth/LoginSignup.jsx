import React from 'react'
import { Row } from 'react-bootstrap'

import Login from './Login'
import Signup from './Signup'

const LoginSignup = props => (
  <div className="login-signup">
    <Row>
      <h1 className="accountHeader">Account</h1>
    </Row>
    <Row>
      <Login />
      <Signup />
    </Row>
  </div>
)

export default LoginSignup

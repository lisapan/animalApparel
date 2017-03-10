import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Login from './Login'
import Signup from './Signup'

const LoginSignup = props => (
  <Grid fluid>
    <Row>
      <h1 id="accountHeader">Account</h1>
    </Row>
    <Row>
      <Col className="login-signup" xs={12} sm={6} md={6} lg={6}>
        <Login />
      </Col>
      <Col className="login-signup"xs={12} sm={6} md={6} lg={6}>
        <Signup />
      </Col>
    </Row>
  </Grid>
)

export default LoginSignup

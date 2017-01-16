import React from 'react'
import { Grid, Row } from 'react-bootstrap'

import Login from './Login'
import Signup from './Signup'

const LoginSignup = (props) => (
  <Grid fluid={true}>
    <Row>
      <h1 id="accountHeader">Account</h1>
    </Row>
    <Row>
      <Login/>
      <Signup/>
    </Row>
  </Grid>
)

export default LoginSignup

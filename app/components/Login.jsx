import React from 'react'
import { loginAndGoToHome } from 'APP/app/reducers/action-creators/auth'
import { connect } from 'react-redux'
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

const handleSubmit = (evt) => {
  evt.preventDefault()
  loginAndGoToHome(evt.target.username.value, evt.target.password.value)
}

const Login = () => (
  <Col xs={12} sm={12} md={6} lg={6} className="login">
    <h2>Sign In</h2>
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId="username">
        <ControlLabel>email</ControlLabel>
        <FormControl
          type="email"
          required />
    </FormGroup>
      <FormGroup controlId="password">
        <ControlLabel>password</ControlLabel>
        <FormControl
          type="password"
          required />
    </FormGroup>
      <Button type="submit">Login</Button>
    </Form>
  </Col>
)

const mapState = () => ({})
const mapDispatch = () => ({ loginAndGoToHome })

export default connect(mapState, mapDispatch)(Login)

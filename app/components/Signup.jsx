import React from 'react'
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export const Signup = ({ signup }) => (

  <Form horizontal onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.email.value, evt.target.password.value, evt.target.confirmPass)
  } }>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>E-mail Address</Col>
      <Col sm={10}>
        <FormControl type="email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>Password</Col>
      <Col sm={10}>
        <FormControl type="password" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalConfirmPassword">
      <Col componentClass={ControlLabel} sm={2}>Password</Col>
      <Col sm={10}>
        <FormControl type="Confirm Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>

)

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup},
) (Signup)

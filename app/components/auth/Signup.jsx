'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Row, Col, FormGroup, FormControl,
         ControlLabel, HelpBlock, Button } from 'react-bootstrap'

import { createUserAndGoToHome } from 'APP/app/reducers/action-creators/auth'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      nameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      passwordConfirmIsValid: false

    }
  }

  getValidationState = inputType => {
    if (inputType === 'email' && this.state.email.length) {
      if (this.state.email.length < 5 ||
          this.state.email.indexOf('@') === -1) return 'error'
      else return 'success'
    }

    if (inputType === 'password' && this.state.password.length) {
      if (this.state.password.length < 8) return 'error'
      else return 'success'
    }

    if (inputType === 'passwordConfirm' && this.state.passwordConfirm) {
      if (this.state.passwordConfirm !== this.state.password) return 'error'
      else return 'success'
    }
    return null
  }

  handleChange = type => event => {
    let input = {}
    input[`${type}`] = event.target.value
    input[`${type}IsValid`] = true
    this.setState(input)
  }

  isInvalid = () => {
    const { nameIsValid, emailIsValid, passwordIsValid, passwordConfirmIsValid } = this.state
    let validationState = (this.getValidationState('email') === 'error') ||
                          (this.getValidationState('password') === 'error') ||
                          (this.getValidationState('passwordConfirm') === 'error')

    return validationState || !nameIsValid || !emailIsValid || !passwordIsValid || !passwordConfirmIsValid
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSignup(this.state)
  }

  render() {

    return (
      <Col id="signup" xs={12} sm={6} md={6} lg={6}>
        <div className="login-signup-box">
          <h2 className="account">Create An Account</h2>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <form>
                <FormGroup
                  controlId="name"
                  validationState={this.getValidationState('name')}>
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    value={this.state.name}
                    type="name"
                    onChange={this.handleChange('name')} />
                </FormGroup>
                <FormGroup
                  controlId="email"
                  validationState={this.getValidationState('email')}>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    value={this.state.email}
                    type="email"
                    onChange={this.handleChange('email')} />
                  <HelpBlock>
                    { this.getValidationState('email') === 'error' ?
                      'A valid email is required.' : '' }
                  </HelpBlock>
                </FormGroup>
                <FormGroup
                  controlId="password"
                  validationState={this.getValidationState('password')}>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange('password')} />
                  <FormControl.Feedback />
                  <HelpBlock>
                    { this.getValidationState('password') === 'error' ?
                      'Password must be at least 8 characters.' : '' }
                  </HelpBlock>
                </FormGroup>
                <FormGroup
                  controlId="passwordConfirm"
                  validationState={this.getValidationState('passwordConfirm')}>
                  <ControlLabel>Password Confirmation</ControlLabel>
                  <FormControl
                    value={this.state.passwordConfirm}
                    type="password"
                    onChange={this.handleChange('passwordConfirm')} />
                  <FormControl.Feedback />
                  <HelpBlock>
                    { this.getValidationState('passwordConfirm') === 'error' ?
                      'Passwords must match.' : '' }
                  </HelpBlock>
                </FormGroup>
              </form>
              <div className="login-signup-button signup">
                <Button
                  type="submit"
                  bsStyle="primary"
                  disabled={this.isInvalid()}
                  onClick={this.handleSubmit}>
                  Signup
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}

Signup.propTypes = {
  handleSignup: PropTypes.func.isRequired
}

const mapStateToProps = () => ({ message: 'Sign up' })
const mapDispatchToProps = dispatch => ({ handleSignup: user => dispatch(createUserAndGoToHome(user)) })

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

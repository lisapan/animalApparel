import React, { Component, PropTypes } from 'react'
import { loginAndGoToHome } from 'APP/app/reducers/action-creators/auth'
import { connect } from 'react-redux'
import { Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false
    }
  }

  handleChange = type => event => {
    let input = {}
    input[type] = event.target.value
    input[`${type}IsValid`] = true
    this.setState(input)
  }

  isInvalid = () => {
    const { email, emailIsValid, password, passwordIsValid } = this.state
    return !(email && emailIsValid && password && passwordIsValid)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  handleHitEnter = event => {
    if (event.key === 'Enter') this.props.login(this.state.email, this.state.password)
  }

  render() {
    return (
      <Col id="login" xs={12} sm={6} md={6} lg={6}>
        <div className="login-signup-box">
          <h2 className="account">Sign In</h2>
          <form>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl
                onChange={this.handleChange('email')}
                name="email"
                type="email"
                value={this.state.email}
              />
          </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                onChange={this.handleChange('password')}
                name="password"
                type="password"
                value={this.state.password}
                onKeyUp={this.handleHitEnter}
              />
          </FormGroup>
          </form>
          <div className="login-signup-button login">
            <Button
              onClick={this.handleSubmit}
              type="submit"
              disabled={this.isInvalid()}
              bsStyle="primary">
              Login
            </Button>
          </div>
        </div>
      </Col>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(
  state => ({}),
  dispatch => ({login: (email, password) => dispatch(loginAndGoToHome(email, password))})
)(Login)

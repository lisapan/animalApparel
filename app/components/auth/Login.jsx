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
    input[`${type}`] = event.target.value
    input[`${type}IsValid`] = true
    this.setState(input)
  }

  isInvalid = () => {
    const { emailIsValid, passwordIsValid } = this.state
    return !emailIsValid || !passwordIsValid
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleLogin(this.state.email, this.state.password)
  }

  render() {

    return (
      <div id="login">
        <h2>Sign In</h2>
        <form>
          <FormGroup controlId="username">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={this.isInvalid()}
            onClick={this.handleSubmit}>
            Sign in
          </Button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(loginAndGoToHome(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

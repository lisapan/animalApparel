import React from 'react';
import { Link } from 'react-router';

import Login from './Login';
import Signup from './Signup';

import { Grid, Row, Col} from 'react-bootstrap';

const LoginSignup = (props) => {

  return (
          <Grid fluid={true}>
            <Row className="show-grid">
              <h1 id="accountHeader">Account</h1>
            </Row>
            <Row className="show-grid">
              <Col md={6} className="login">
                <h2>Sign In</h2>
                <Login />
              </Col>
              <Col md={6} className="sign-up">
                <h2>Create An Account</h2>
                <Signup />
              </Col>
            </Row>
          </Grid>
  );
};


export default LoginSignup

'use strict'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, Breadcrumb, Row, FormGroup, FormControl,
         NavDropdown, MenuItem, Glyphicon, Button, Col, Grid, InputGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout as logOutUser } from '../reducers/action-creators/auth'

const renderLoginSignup = () => {
  return (
    <NavDropdown
      noCaret
      eventKey={3}
      title="Account"
      id="basic-nav-dropdown"
      className="navbar-login">
      <LinkContainer to={{pathname: '/account/login'}}>
        <MenuItem eventKey={3.1}>Login / Signup</MenuItem>
      </LinkContainer>
      <MenuItem eventKey={3.2}>Order Status</MenuItem>
    </NavDropdown>
  )
}

const renderLogout = (props) => {
  const name = Object.keys(props.auth).length ? null : (props.auth.name || props.auth.email)

  return (
    <NavDropdown noCaret eventKey={3} title={`Hi, ${name}! `} id="basic-nav-dropdown" className="navbar-login">
      <MenuItem eventKey={3.1}>Account</MenuItem>
      <MenuItem eventKey={3.1}>Order Status</MenuItem>
      <MenuItem eventKey={3.1}>Wishlist</MenuItem>
      <LinkContainer to={{pathname: '/'}}>
        <MenuItem eventKey={3.1} onClick={this.props.logout}>
          Logout
        </MenuItem>
      </LinkContainer>
    </NavDropdown>
  )
}

renderLogout.propTypes = {
  auth: PropTypes.object.isRequired
}

const shoppingCart = <Glyphicon glyph="shopping-cart" />

const NavBar = (props) => {
  return (
    <Navbar>
      <Row className="black-bar">
        <p>Made in the USA - Sweatshop Free</p>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Navbar.Header>
            <Navbar.Brand>
              <Nav>
                <Col xs={12} sm={12} md={6} lg={6} className="logo">
                  <Link to="/">Animal Apparel<sup>®</sup></Link>
                </Col>
                <Col xsHidden={true} md={6} lg={6}
                  className="breadcrumb-nav">
                  <Nav pullRight={true}>
                    <Breadcrumb>
                      <Breadcrumb.Item href="/products/women" className="navbar-categories">
                        Women
                      </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/men" className="navbar-categories">
                          Men
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/kids" className="navbar-categories">
                          Kids
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/pets" className="navbar-categories">
                          Pets
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/sale" className="navbar-categories">
                          Sale
                        </Breadcrumb.Item>
                    </Breadcrumb>
                  </Nav>
                </Col>
              </Nav>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} mdHidden={true} lgHidden={true}>
          <Navbar.Collapse>
          </Navbar.Collapse>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} xsHidden={true} smHidden={true}>
          <Nav pullRight={true} id="lower-nav">
            { Object.keys(props.auth).length ? renderLogout(props) : renderLoginSignup() }
            <NavDropdown
              title={shoppingCart}
              noCaret eventKey={2} href="#" id="basic-nav-dropdown">
              <LinkContainer to={{ pathname: '/cart' }}>
                <MenuItem eventKey={2.1}>Your Cart is empty.</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <Navbar.Form pullRight={true}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Button>
                    <Button type="submit">Search</Button>
                  </InputGroup.Button>
                  <FormControl type="text" placeholder="Filter by Style# or Keyword" />
                </InputGroup>
              </FormGroup>
            </Navbar.Form>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  )
}

const mapState = ({auth}) => ({auth});
// // equivalent to:
// const mapState = state => {
//   return {
//     currentUser: state.currentUser
//   };
// };

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logOutUser());
    // browserHistory.push('/'); // removed to demo logout instant re-render
  }
});

export default connect(mapState, mapDispatch)(NavBar);

'use strict'

'use strict'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, Breadcrumb, Row, FormGroup, FormControl,
         NavDropdown, MenuItem, Glyphicon, Button, Col, InputGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../reducers/action-creators/auth'

const LoginSignup = (props) => {
  return (
    <NavDropdown
      noCaret
      eventKey={3}
      title="Account"
      id={props.collapse ? 'login-dropdown-collapse' : 'login-dropdown'}
      className="navbar-login">
      <LinkContainer to={{pathname: '/account/login'}}>
        <MenuItem eventKey={3.1}>Login / Signup</MenuItem>
      </LinkContainer>
      <MenuItem eventKey={3.2}>Order Status</MenuItem>
    </NavDropdown>
  )
}

LoginSignup.propTypes = {
  collapse: PropTypes.bool.isRequired
}

const Logout = props => {
  const name = (!props.auth || (typeof props.auth === 'string')) ? null : (props.auth.name || props.auth.email)

  return (
    <NavDropdown
      href="#"
      noCaret eventKey={3}
      title={`Hi, ${name}! `}
      id={props.collapse ? 'logout-dropdown-collapse' : 'logout-dropdown'}
      className="navbar-login">
      <MenuItem eventKey={3.1}>Account</MenuItem>
      <MenuItem eventKey={3.1}>Order Status</MenuItem>
      <LinkContainer to={{pathname: '/'}}>
        <MenuItem eventKey={3.1} onClick={props.logout}>Logout</MenuItem>
      </LinkContainer>
    </NavDropdown>
  )
}

Logout.propTypes = {
  collapse: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const NavBar = props => {
  return (
    <Row>
      <Navbar>
        <Row className="black-bar">
          <h4>Made in the USA - Sweatshop Free</h4>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Navbar.Header>
              <Navbar.Brand>
                <Nav>
                  <Col xs={12} sm={12} md={6} lg={6} className="logo">
                    <Link to="/home">Animal Apparel<sup>®</sup></Link>
                  </Col>
                </Nav>
                <Col xsHidden sm={12} md={6} lg={6} className="breadcrumb-nav">
                  <Nav pullRight={true}>
                    <Breadcrumb>
                      <LinkContainer to={{pathname: '/products/women'}}>
                        <Breadcrumb.Item href="" className="navbar-categories">
                          Women
                        </Breadcrumb.Item>
                      </LinkContainer>
                      <LinkContainer to={{pathname: '/products/men'}}>
                        <Breadcrumb.Item href="/products/men" className="navbar-categories">
                          Men
                        </Breadcrumb.Item>
                      </LinkContainer>
                        <LinkContainer to={{pathname: '/products/kids'}}>
                          <Breadcrumb.Item className="navbar-categories">
                            Kids
                          </Breadcrumb.Item>
                        </LinkContainer>
                        <LinkContainer to={{pathname: '/products/pets'}}>
                          <Breadcrumb.Item className="navbar-categories">
                            Pets
                          </Breadcrumb.Item>
                        </LinkContainer>
                        <LinkContainer to={{pathname: '/sale'}}>
                          <Breadcrumb.Item className="navbar-categories">
                            Sale
                          </Breadcrumb.Item>
                        </LinkContainer>
                    </Breadcrumb>
                  </Nav>
                </Col>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Col>
        </Row>
        { /* mobile menu */ }
        <Row>
          <Col xs={12} sm={12} mdHidden lgHidden className="lower-nav-collapse">
            <Navbar.Collapse>
              <Nav id="lower-nav-collapse">
                { typeof props.auth !== 'string' ?
                  <Logout auth={props.auth} collapse={true} logout={props.logOutUser} /> :
                  <LoginSignup auth={props.auth} collapse={true} /> }
                <NavDropdown
                  title={<Glyphicon glyph="shopping-cart" />}
                  noCaret eventKey={2} id="cart-dropdown-collapse">
                  {props.cart.order_items ?
                    <LinkContainer to={{ pathname: `/cart/${props.cart.id}` }}>
                      <MenuItem eventKey={2.1}>{`Cart (${props.cart.order_items.length})`}</MenuItem>
                    </LinkContainer> :  <MenuItem eventKey={2.1}>Your Cart is empty.</MenuItem>}
                </NavDropdown>
                <Navbar.Form id="search-collapse">
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
            </Navbar.Collapse>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden className="breadcrumb-mobile">
            <Nav pullRight={true}>
              <Breadcrumb>
                <LinkContainer to={{pathname: '/products/women'}}>
                  <Breadcrumb.Item href="" className="navbar-categories">
                    Women
                  </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to={{pathname: '/products/men'}}>
                  <Breadcrumb.Item href="/products/men" className="navbar-categories">
                    Men
                  </Breadcrumb.Item>
                </LinkContainer>
                  <LinkContainer to={{pathname: '/products/kids'}}>
                    <Breadcrumb.Item className="navbar-categories">
                      Kids
                    </Breadcrumb.Item>
                  </LinkContainer>
                  <LinkContainer to={{pathname: '/products/pets'}}>
                    <Breadcrumb.Item className="navbar-categories">
                      Pets
                    </Breadcrumb.Item>
                  </LinkContainer>
                  <LinkContainer to={{pathname: '/sale'}}>
                    <Breadcrumb.Item className="navbar-categories">
                      Sale
                    </Breadcrumb.Item>
                  </LinkContainer>
              </Breadcrumb>
            </Nav>
          </Col>
        </Row>
        { /* desktop menu */ }
        <Row className="lower-nav">
          <Col md={12} lg={12} xsHidden={true} smHidden={true} id="lower-nav">
            <Nav pullRight={true}>
              { typeof props.auth !== 'string' ?
                <Logout auth={props.auth} collapse={true} logout={props.logOutUser} /> :
                <LoginSignup auth={props.auth} collapse={true} /> }
              <NavDropdown
                title={<Glyphicon glyph="shopping-cart" />}
                noCaret eventKey={2} href="#" id="cart-dropdown">
                {props.cart.order_items ? <LinkContainer to={{ pathname: `/cart/${props.cart.id}` }}>
                  <MenuItem eventKey={2.1}>{`Cart(${props.cart.order_items.length})`}</MenuItem>
                </LinkContainer> :  <MenuItem eventKey={2.1}>Your Cart is empty.</MenuItem>}
              </NavDropdown>
              <Navbar.Form pullRight={true} id="search">
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
    </Row>
  )
}

NavBar.propTypes = {
  cart: PropTypes.object.isRequired,
  logOutUser: PropTypes.func.isRequired
}

const mapState = ({ auth, cart }) => ({ auth, cart })

const mapDispatch = dispatch => ({ logOutUser: () => dispatch(logout()) })

export default connect(mapState, mapDispatch)(NavBar)

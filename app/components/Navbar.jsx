'use strict'
import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, Breadcrumb, NavDropdown, MenuItem, FormGroup, FormControl, bsStyle, Glyphicon } from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils'
import { LinkContainer } from 'react-router-bootstrap'
import { logout as logOutUser } from '../reducers/auth'

export default () => {
  return (
    <div className="nav-bar">
      <div className="black-bar">
        <p>Made in the USA - Sweatshop Free</p>
      </div>
      <Navbar>
        <Navbar.Collapse>
          <Nav pullRight>
            { this.props.auth ? this.renderLogout() : this.renderLoginSignup() }
            <NavDropdown noCaret eventKey={2} title={<Glyphicon glyph="shopping-cart" />} id="basic-nav-dropdown">
              <LinkContainer to={{ pathname: '/cart' }}>
                <MenuItem eventKey={2.1}>Your Cart is empty.</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Animal Apparel<sup>®</sup></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Breadcrumb>
            <LinkContainer to={{ pathname: '/products/women' }}>
              <Breadcrumb.Item className="navbar-categories">Women</Breadcrumb.Item>
              {/*eventKey={3}*/}
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/men' }}>
              <Breadcrumb.Item className="navbar-categories">Men</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/kids' }}>
              <Breadcrumb.Item className="navbar-categories">Kids</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/cats' }}>
              <Breadcrumb.Item className="navbar-categories">Cats</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/dogs' }}>
              <Breadcrumb.Item className="navbar-categories">Dogs</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/sale' }}>
              <Breadcrumb.Item className="navbar-categories">Sale</Breadcrumb.Item>
            </LinkContainer>
          </Breadcrumb>
        </Navbar.Collapse>
      </Navbar>
      {/*<Navbar className="search">
        <Nav pullRight>
          <Navbar.Text>Search</Navbar.Text>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Style# or Keyword" />
            </FormGroup>
            {' '}
          </Navbar.Form>
        </Nav>
      </Navbar>*/}
    </div>
  )


  renderLoginSignup(){
    return (
      <NavDropdown noCaret eventKey={3} title="Account /&nbsp;" id="basic-nav-dropdown" className="navbar-login">
        <LinkContainer to={'/account/login'}><MenuItem eventKey={3.1}>Login</MenuItem></LinkContainer>
        <LinkContainer to={'/account/login'}><MenuItem eventKey={3.1}><Link to={'/account/login'}>Sign Up</Link></MenuItem></LinkContainer>
        <MenuItem eventKey={3.1}>Order Status</MenuItem>
      </NavDropdown>
    )
  }


  renderLogout(){
    const name = this.props.auth.name || this.props.auth.email;
    return(
      <NavDropdown noCaret eventKey={3} title={`Hi, ${name}! `} id="basic-nav-dropdown" className="navbar-login">
        <MenuItem eventKey={3.1}>Account</MenuItem>
        <MenuItem eventKey={3.1}>Order Status</MenuItem>
        <MenuItem eventKey={3.1}>Wishlist</MenuItem>
        <LinkContainer to={'/'}><MenuItem eventKey={3.1} onClick={this.props.logout}>Logout</MenuItem></LinkContainer>
      </NavDropdown>
    )
  }
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

export default connect(mapState, mapDispatch)(NavDiv);

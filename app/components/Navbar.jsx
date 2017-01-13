'use strict'
import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl, bsStyle, Glyphicon } from 'react-bootstrap'
import {connect} from 'react-redux'
import { bootstrapUtils } from 'react-bootstrap/lib/utils'
import {LinkContainer} from 'react-router-bootstrap'
import { logout as logOutUser } from '../reducers/auth'

class NavDiv extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }


  render(){
    return (
      <div className="nav-bar">
        <div className="black-bar">
          <p>Made in the USA - Sweatshop Free</p>
        </div>
        <Navbar>
          <Navbar.Collapse>
            <Nav pullRight>
              { this.props.auth ? this.renderLogout() : this.renderLoginSignup() }
              <NavDropdown noCaret eventKey={3} title={<Glyphicon glyph="shopping-cart" />} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Your Cart is empty.</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">Animal Apparel<sup>®</sup></IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Women/" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Costume</MenuItem>
                <MenuItem eventKey={3.1}>Winter</MenuItem>
              </NavDropdown>
              <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Men/" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Costume</MenuItem>
                <MenuItem eventKey={3.1}>Winter</MenuItem>
              </NavDropdown>
              <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Kids/" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Costume</MenuItem>
                <MenuItem eventKey={3.1}>Winter</MenuItem>
              </NavDropdown>
              <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Cats/" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Costume</MenuItem>
                <MenuItem eventKey={3.1}>Winter</MenuItem>
              </NavDropdown>
              <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Dogs/" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Costume</MenuItem>
                <MenuItem eventKey={3.1}>Winter</MenuItem>
              </NavDropdown>
              <NavDropdown noCaret className="navbar-categories" eventKey={3} title="Sale" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Costume</MenuItem>
                <MenuItem eventKey={3.1}>Winter</MenuItem>
              </NavDropdown>
            </Nav>
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
  }

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
    return(
      <NavDropdown noCaret eventKey={3} title="Account /&nbsp;" id="basic-nav-dropdown" className="navbar-login">
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

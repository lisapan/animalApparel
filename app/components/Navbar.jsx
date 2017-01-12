'use strict'
import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl, bsStyle, Glyphicon } from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils'
import { LinkContainer } from 'react-router-bootstrap'

export default () => {
  return (
    <div className="nav-bar">
      <div className="black-bar">
        <p>Made in the USA - Sweatshop Free</p>
      </div>
      <Navbar>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown noCaret eventKey={1} title="Login /&nbsp;" id="basic-nav-dropdown" className="navbar-login">
              <LinkContainer >
                <MenuItem eventKey={1.1}>Sign Up</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown noCaret eventKey={2} title={<Glyphicon glyph="shopping-cart" />} id="basic-nav-dropdown">
              <LinkContainer>
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
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/products/women' }}>
              <NavItem noCaret className="navbar-categories" eventKey={3} title="Women/"/>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/men' }}>
              <NavItem noCaret className="navbar-categories" eventKey={4} title="Men/"/>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/kids' }}>
              <NavItem noCaret className="navbar-categories" eventKey={5} title="Kids/"/>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/cats' }}>
              <NavItem noCaret className="navbar-categories" eventKey={6} title="Cats/"/>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/dogs' }}>
              <NavItem noCaret className="navbar-categories" eventKey={7} title="Dogs/"/>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/products/sale' }}>
              <NavItem noCaret className="navbar-categories" eventKey={8} title="Sale/"/>
            </LinkContainer>
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

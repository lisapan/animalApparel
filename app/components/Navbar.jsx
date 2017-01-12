'use strict'
import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, Breadcrumb, NavDropdown, MenuItem, FormGroup, FormControl, bsStyle, Glyphicon } from 'react-bootstrap'
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
              <LinkContainer to={{ pathname: '/account/login' }}>
                <MenuItem eventKey={1.1}>Sign Up</MenuItem>
              </LinkContainer>
            </NavDropdown>
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
}

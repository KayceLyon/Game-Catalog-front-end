import React from 'react'
import {Link, Outlet} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Search from './Search'

const Navigation = (params) => {
    return (
        <>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/games"}>Game2Play</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/games"}>Home</Nav.Link>
            <NavDropdown title="Forms" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/games/new"}>Add Games</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/games/edit/:id"}>
                Edit Games
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              GG
            </Nav.Link>
          </Nav>
            <Search games = {params.games} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
        </>
    )
}

export default Navigation
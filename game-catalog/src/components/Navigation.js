import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Search from './Search'

const Navigation = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Game2Play</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#Index">Games</Nav.Link>
            <NavDropdown title="Forms" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Add Games</NavDropdown.Item>
              <NavDropdown.Item href="#Edit">
                Edit Games
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              GG
            </Nav.Link>
          </Nav>
            <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Navigation
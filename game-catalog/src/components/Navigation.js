import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Search from './Search'

const Navigation = (params) => {
    return (
        <>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/games"}>Games2Play</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/users/signup"}>Sign-Up</Nav.Link>
            <Nav.Link as={Link} to={"/users/login"}>Login</Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
            </NavDropdown>
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
            <Search games = {params.games} setGames = {params.setGames} searchParams = {params.searchParams} setSearchParams = {params.setSearchParams} filteredGames = {params.filteredGames} setFilteredGames = {params.setFilteredGames} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
        </>
    )
}

export default Navigation
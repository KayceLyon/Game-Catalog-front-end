import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Search from './Search'

const Navigation = (params) => {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
                   <Navbar.Brand className="navbarhome" as={Link} to={"/games"}>Game2Play</Navbar.Brand>
            <Navbar.Toggle className="hamhamham" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title as={Link} to={"/games"} className={'offcanvas-link'} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Game2Play
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
    <Nav.Link as={Link} to={"/users/signup"}>Sign-Up</Nav.Link>
             <Nav.Link as={Link} to={"/games/new"}>Add Games</Nav.Link>
            <Nav.Link as={Link} to={"/games/edit/:id"}>
                Edit Games</Nav.Link>
                </Nav>
               <Search games = {params.games} 
            setGames = {params.setGames} 
            searchParams = {params.searchParams} 
            setSearchParams = {params.setSearchParams} 
            filteredGames = {params.filteredGames} 
            setFilteredGames = {params.setFilteredGames} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </>
  );
    // return (
    //     <>
    //     <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand as={Link} to={"/games"}>Game2Play</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link as={Link} to={"/users/signup"}>Sign-Up</Nav.Link>
    //         <NavDropdown title="Profile" id="navbarScrollingDropdown">
    //         </NavDropdown>
    //         <NavDropdown title="Forms" id="navbarScrollingDropdown">
    //           <NavDropdown.Item as={Link} to={"/games/new"}>Add Games</NavDropdown.Item>
    //           <NavDropdown.Item as={Link} to={"/games/edit/:id"}>
    //             Edit Games
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#" disabled>
    //           GG
    //         </Nav.Link>
    //       </Nav>
    //         <Search games = {params.games} 
    //         setGames = {params.setGames} 
    //         searchParams = {params.searchParams} 
    //         setSearchParams = {params.setSearchParams} 
    //         filteredGames = {params.filteredGames} 
    //         setFilteredGames = {params.setFilteredGames} />
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // <Outlet />
    //     </>
    // )
}

export default Navigation
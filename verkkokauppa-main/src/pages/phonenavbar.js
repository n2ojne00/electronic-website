import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../pages/phonenavbar.css';

const BottomNavbar = () => {
  return (
    <Navbar className="bottom-navbar" fixed="bottom" bg="dark" variant="dark">
      <Nav className="mx-auto">
        <Nav.Link href="./">Etusivu</Nav.Link>
        <Nav.Link href="/help">Info</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export { BottomNavbar };
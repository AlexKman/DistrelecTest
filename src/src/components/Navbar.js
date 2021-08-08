import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigationbar() {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt="logo"
          src={process.env.PUBLIC_URL + "/images/Distrelec.png"}
          class="navbarImg"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">
              <i class="fas fa-home"></i>
              Home
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

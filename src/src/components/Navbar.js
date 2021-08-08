import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.scss";

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

          <Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Post and Packaging Costs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Quoting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Returns, Repairs
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link>
            <NavDropdown title="New" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">New Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                RND New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link className="nav-link" to="/cart">
              <i class="fas fa-shopping-cart"></i>
              Cart
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

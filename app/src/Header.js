import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">iPlant.AI</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/growerDashboard">Grower Dashboard</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/growerAddPlant">Sell A Plant </Link>
            </Nav.Link>

            <Nav.Link href="#pricing">
              <Link to="/home">Trending Plants</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

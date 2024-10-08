import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Photo from "./Photo";
import Button from "react-bootstrap/esm/Button";
function TopNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Photo />
        <Navbar.Brand href="#home" style={{ marginRight: "15rem" }}>
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ margin: "1rem" }}>Features</Nav.Link>
            <Nav.Link style={{ margin: "1rem" }}>Pricing</Nav.Link>
            <Nav.Link style={{ margin: "1rem" }}>Community</Nav.Link>
            <Nav.Link style={{ margin: "1rem" }}>Support</Nav.Link>
            <Button
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                height: "50px",
                width: "100px",
              }}
              variant="outline-primary"
            >
              Login
            </Button>
            <Button
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                height: "50px",
                width: "100px",
              }}
            >
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;

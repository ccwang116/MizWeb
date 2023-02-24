import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import { ThemeContexts } from "../contexts/ThemeContext";
import context from "react-bootstrap/esm/AccordionContext";
import classes from "./styles.module.scss";

function MyNavbar() {
  return (
    <>
      <ThemeContexts.Consumer>
        {(context) => {
          return (
            <Navbar
              // className="justify-content-between"
              bg="primary"
              variant="dark"
              expand="lg"
            >
              <Navbar.Brand href="/">CCWang</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Nav.Link as={NavLink} to="/" exact>
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/monitortest" exact>
                    Monitor Test
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          );
        }}
      </ThemeContexts.Consumer>
    </>
  );
}

export default withRouter(MyNavbar);

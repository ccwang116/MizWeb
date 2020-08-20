import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import { ThemeContexts } from "../contexts/ThemeContext";
import context from "react-bootstrap/esm/AccordionContext";

function MyNavbar() {
  const contextType = ThemeContexts
  console.log(context)
  const { isLightThme, light, dark } = context
  const theme = isLightThme ? light : dark;
  return (
    <>
      <ThemeContexts.Consumer>{(context) => {
        return (
          <Navbar
            className="justify-content-between"
            bg="primary"
            variant="dark"

          >
            <img alt="" src="./images/logo_aimfolds.svg"></img>
            <div className="button-area d-flex">
              <Link className="flex-fill" to="/analysis">
                <Button className="w-100 bg-secondary" >
                  <i className="fas fa-clipboard-check mr-2"></i>單次分析
          </Button>
              </Link>
              <Link className="flex-fill" to="/chronic">
                <Button className="w-100 topbtn-active" >
                  <i className="fas fa-chart-line mr-2"></i>Chronic
            </Button>
              </Link>
            </div>
            <Nav className="">
              <Nav.Link as={NavLink} to="/" exact>
                Home
          </Nav.Link>
              <Nav.Link as={NavLink} to="/memberlogin">
                Login
          </Nav.Link>
              <Nav.Link as={NavLink} to="/productlist">
                Sign Up
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
                About
          </Nav.Link>
            </Nav>
          </Navbar>
        )
      }}
      </ThemeContexts.Consumer>
    </>
  );
}

export default withRouter(MyNavbar);

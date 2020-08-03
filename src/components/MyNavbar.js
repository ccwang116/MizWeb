import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";

function MyNavbar() {
  return (
    <>
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
        </Nav>
      </Navbar>
    </>
  );
}

export default withRouter(MyNavbar);

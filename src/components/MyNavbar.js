import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import { ThemeContexts } from "../contexts/ThemeContext";
import context from "react-bootstrap/esm/AccordionContext";
import classes from "./styles.module.scss";

function MyNavbar() {
  // const contextType = ThemeContexts
  // console.log(context);
  // const { isLightThme, light, dark } = context
  // const theme = isLightThme ? light : dark;
  //旋轉
  const handleCardShow = (_type, _index, _target) => {
    const target = _type + _index;

    _target.currentTarget.classList.toggle(classes.imgRotate);

    const tarDoms = document.querySelectorAll(`.${target}`);
    for (const dom of tarDoms) {
      dom.classList.toggle(classes.show);
    }
  };
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
              <Navbar.Brand href="/">Miz Web</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {/* <div className="button-area d-flex">
                  <Link className="flex-fill" to="/analysis">
                    <Button className="w-100 bg-secondary">
                      <i className="fas fa-clipboard-check mr-2"></i>A按鈕
                    </Button>
                  </Link>
                  <Link className="flex-fill" to="/chronic">
                    <Button className="w-100 topbtn-active">
                      <i className="fas fa-chart-line mr-2"></i>B按鈕
                    </Button>
                  </Link>
                </div> */}
                <Nav className="">
                  <Nav.Link as={NavLink} to="/" exact>
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="實用篇"
                    id="basic-nav-dropdown"
                    className={classes.dropdownBlack}
                  >
                    <NavDropdown.Item href="/songch">
                      松村滷味試算
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="測試篇"
                    id="basic-nav-dropdown"
                    className={classes.dropdownBlack}
                  >
                    <NavDropdown.Item href="/mention">mention</NavDropdown.Item>
                    <NavDropdown.Item href="/about">
                      pagination
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/pokemon">pokemon</NavDropdown.Item>
                    <NavDropdown.Item href="/scroll">scroll</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">test division</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={NavLink} to="/logout">
                    log out
                  </Nav.Link>
                  {/* <Button
                    className={classes.titleInner}
                    onClick={(e) => {
                      handleCardShow("stage", 0, e);
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_icon.svg/1200px-Arrow_icon.svg.png"
                      alt=""
                    />
                  </Button> */}
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

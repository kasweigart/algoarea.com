import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import logo from "../images/logo.png";
import { Link, Redirect } from "react-router-dom";
import Search from './Search'

const RSNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggle2 = () => setIsOpen2(!isOpen2);

  function SubmitHandler() {
    return <Redirect to="/search" />;
  }

  return (
    <div id="nav">
      <Navbar light expand="md" className="shadow-sm mb-3 bg-white">
        <Link to="/">
          <img src={logo} width="32px" className="mr-2"></img>
        </Link>
        <Link to="/">
          <NavbarBrand href="https://www.algoarea.com/">AlgoArea</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/algorithms" style={{ textDecoration: "none" }}>
                <NavLink>Algorithms</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/data-structures" style={{ textDecoration: "none" }}>
                <NavLink>Data Structures</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/time&space-complexity"
                style={{ textDecoration: "none" }}
              >
                <NavLink>Time & Space Complexity</NavLink>
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/terminology" style={{ textDecoration: "none" }}>
                <NavLink>Terminology</NavLink>
              </Link>
            </NavItem> */}
            <NavItem>
              <Link to="/exercises" style={{ textDecoration: "none" }}>
                <NavLink>Exercises</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/resources" style={{ textDecoration: "none" }}>
                <NavLink>Resources</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
          </Nav>
          <Search />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default RSNav;

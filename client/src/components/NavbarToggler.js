import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import logo from '../images/logo.png';

const RSNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id='nav'>
      <Navbar light expand="md">
        <img src={logo} width="32px" className="mr-2"></img>
        <NavbarBrand href="https://www.algoarea.com/">AlgoArea</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Algorithms</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Data Structures</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Time & Space Complexity</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Exercises</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
          <Form inline>
      <FormGroup>
        <Label for="search"></Label>
        <Input type="text" name="text" id="search" placeholder="Search..." />
      </FormGroup>
    </Form>
          <NavbarText>
            <NavLink href=''>Login</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default RSNav;
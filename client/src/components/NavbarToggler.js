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
  Input
} from 'reactstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'

const RSNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id='nav'>
      <Navbar light expand="md">
        <img src={logo} width="32px" className="mr-2"></img>
        <Link to='/'>
        <NavbarBrand href="https://www.algoarea.com/">AlgoArea</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/algorithms">
              <NavLink>Algorithms</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/data-structures'>
              <NavLink>Data Structures</NavLink>
              </Link>
            </NavItem>
            <NavItem>
            <Link to='/time&space-complexity'>
              <NavLink href="">Time & Space Complexity</NavLink>
              </Link>
            </NavItem>
            <NavItem>
                <Link to='/exercises'>
              <NavLink href="">Exercises</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to ='/resources'>
              <NavLink href="">Resources</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'>
              <NavLink href="">Contact</NavLink>
              </Link>
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
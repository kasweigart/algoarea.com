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
import { Link, Redirect } from 'react-router-dom'

const RSNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function SubmitHandler() {
    return (
      <Redirect to='/search' />
    )
  }

  return (
    <div id='nav'>
      <Navbar light expand="md">
      <Link to='/'>
        <img src={logo} width="32px" className="mr-2"></img>
        </Link>
        <Link to='/'>
        <NavbarBrand href="https://www.algoarea.com/">AlgoArea</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/algorithms" style={{textDecoration: 'none'}}>
              <NavLink>Algorithms</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/data-structures' style={{textDecoration: 'none'}}>
              <NavLink>Data Structures</NavLink>
              </Link>
            </NavItem>
            <NavItem>
            <Link to='/time&space-complexity' style={{textDecoration: 'none'}}>
              <NavLink href="">Time & Space Complexity</NavLink>
              </Link>
            </NavItem>
            <NavItem>
                <Link to='/exercises' style={{textDecoration: 'none'}}>
              <NavLink href="">Exercises</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to ='/resources' style={{textDecoration: 'none'}}>
              <NavLink href="">Resources</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contact' style={{textDecoration: 'none'}}>
              <NavLink href="">Contact</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
          <Form inline onSubmit={SubmitHandler()}>
      <FormGroup>
        <Label for="search"></Label>
        <Input type="text" name="text" id="search" placeholder="Search..." />
      </FormGroup>
    </Form>
          <NavbarText>
            <Link to='/login'style={{textDecoration: 'none'}}>
            <NavLink>Login</NavLink>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default RSNav;
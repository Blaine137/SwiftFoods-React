import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Navbar.scss';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="navbar">
        <NavbarBrand href="#"><img src="assets/images/swiftfoodslogodcolor.png" alt="logo" height="30" width="30"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="index.html">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About us</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Shop</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Contact</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

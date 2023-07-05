import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { useSelector } from 'react-redux';


const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const toggle = () => setIsOpen(!isOpen);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  return (
    <div>
      <Navbar id="mainNavbartwo" light expand="md" className="fixed-top">
        <NavbarBrand href="/"><span className="fa fa-cutlery"></span> AKGEC CANTEEN</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home <span className="fa fa-home"></span> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About <span className="fa fa-info"></span> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact <span className="fa fa-address-book"></span> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">cart <span className="fa fa-shopping-cart"></span> 
              {
                cartItems.length === 0 ? <span></span> : <span style={{color: "red", fontSize: "1rem"}}> *</span>
              }
              </NavLink>
            </NavItem>
            <NavItem>
            {
              userInfo ? 
              <NavLink href="/profile"><em>Signed in as --</em> {userInfo.name}</NavLink> :

              <NavLink href="/signin">Sign In <span className="fa fa-sign-in"></span> </NavLink>
            }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
import {Navbar,NavbarBrand,Collapse,Nav, NavItem,NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const NavigationComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggle = () => {
    setIsNavOpen(!isNavOpen)
  };
  return (
    <div> 
        <Navbar color="dark" dark expand="sm">
        <NavbarToggler onClick={navToggle}/>
          <NavbarBrand href="/">Restaurant </NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar >
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className='nav-link'>Home</Link>
            </NavItem>

            <NavItem>
              <Link to="/menu" className='nav-link'>Menu</Link>
            </NavItem>

            <NavItem>
              <Link to="/about" className='nav-link'>About</Link>
            </NavItem>

            <NavItem>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </NavItem>

          </Nav>
        </Collapse>
        </Navbar>
  </div>
  )
}

export default NavigationComponent
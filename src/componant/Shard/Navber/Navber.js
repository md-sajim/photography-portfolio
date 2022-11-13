import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../context/ContextProvider';
import './Navber.css'

const Navber = () => {
  const { logOut, user, setUser } = useContext(AuthProvider)
  const hendleLogOut = () => {
    logOut().then(result => {
      setUser()
    }).catch(() => { })
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" className='sticky-top nav-hight' variant="dark">
      <Container>
        <Navbar.Brand href="#home"><span className='text-warning'>PHOTO</span>GRAFI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <Link className="btn btn-secondary  active" to='/orderrevew'>Revew</Link>
          </Nav>
          <div className='vartical-line ms-2'></div>
          <div className='vartical-line'></div>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>

            {user?.uid ?
              <button className="btn btn-secondary  active" onClick={hendleLogOut}>LogOut</button>
              :
              <Link className="btn btn-secondary active" to='/login'>Log In</Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
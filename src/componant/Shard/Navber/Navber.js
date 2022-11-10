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
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='vartical-line'></div>
          <div className='vartical-line'></div>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>

            {user?.uid ?
              <button className="btn btn-secondary btn-lg active" onClick={hendleLogOut}>LogOut</button>
              :
              <Link className="btn btn-secondary btn-lg active" to='/login'>Log In</Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
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
      <Container className='p-0'>
        <Navbar.Brand href="#home"><span className='text-warning'>PHOTO</span>GRAFI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="btn btn-secondary m-1 active" to='/'>Home</Link>
            <Link className="btn btn-secondary m-1 active" to='/blog'>Blog</Link>
            <Link className="btn btn-secondary m-1 active" to='/orderrevew'>Revew</Link>
          </Nav>
          <div className='vartical-line d-md-block d-sm-none  m-1'></div>
          <div className='vartical-line d-md-block d-sm-none m-1'></div>
          <Nav>

            <Nav.Link href="#deets">{user?.email}</Nav.Link>
            {user?.uid ?
              <button className="btn btn-secondary  active" onClick={hendleLogOut}>LogOut</button>
              :
              <Link className="btn btn-secondary active" to='/login'>Log In</Link>
            }
            {
              user?.photoURL ?
                <img className='img-style d-md-block d-sm-none' src={user?.photoURL} alt="" /> : <FaUserCircle className='img-style d-md-block text-white d-sm-none' />

            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
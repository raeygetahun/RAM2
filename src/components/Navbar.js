import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallary from '../pages/Gallary';
import Home from '../pages/Home';
import Service from '../pages/Service';
import Employment from '../pages/Employment';
import '../main.css';

function Navbarcomp() {
  const location = useLocation();

  return (
    <div>
      <Navbar expand="lg" className='ps-5 pe-5 h6 navbar'>
        <Navbar.Brand as={Link} to="/home" style={{ color: 'white' }}>Ram Trucking Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Nav.Link as={Link} to="/home" style={{ color: location.pathname === '/home' ? 'rgb(146, 158, 168)' : '#CCCCCC' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: location.pathname === '/about' ? 'rgb(146, 158, 168)' : '#CCCCCC' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/service" style={{ color: location.pathname === '/service' ? 'rgb(146, 158, 168)' : '#CCCCCC' }}>Services</Nav.Link>
            <Nav.Link as={Link} to="/gallary" style={{ color: location.pathname === '/gallary' ? 'rgb(146, 158, 168)' : '#CCCCCC' }}>Gallary</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: location.pathname === '/contact' ? 'rgb(146, 158, 168)' : '#CCCCCC' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/employment" style={{ color: location.pathname === '/employment' ? 'rgb(146, 158, 168)' : '#CCCCCC' }}>Employment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/service" element={<Service />} />
        <Route path="/employment" element={<Employment />} />
      </Routes>
    </div>
  );
}

export default Navbarcomp;

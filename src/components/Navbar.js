import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Link, Routes} from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallary from '../pages/Gallary';
import Home from '../pages/Home';
import Service from '../pages/Service';
import Employment from '../pages/Employment';
import '../main.css' 

function Navbarcomp(){

    return(
        <div >
            <Navbar  expand="lg" className='ps-5 pe-5 h6 navbar'>  
                <Navbar.Brand Link to= {"/home"} style={{color:'white'}}>Ram Trucking Group</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto " style={{color:'white'}}>

                    <Nav.Link as={Link} to= {"/home"} style={{color:'white'}}>Home</Nav.Link>
                    <Nav.Link as={Link} to= {"/about"} style={{color:'white'}}>About</Nav.Link>         
                    <Nav.Link as={Link} to= {"/service"} style={{color:'white'}}>Services</Nav.Link>
                    <Nav.Link as={Link} to= {"/gallary"} style={{color:'white'}}>Gallary</Nav.Link>
                    <Nav.Link as={Link} to= {"/contact"} style={{color:'white'}}>Contact</Nav.Link>
                    <Nav.Link as={Link} to= {"/employment"} style={{color:'white'}}>Employment</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item> 
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
                           
            <Routes>
                <Route  path="../pages/home" exact element={<Home/>}></Route>

                <Route  path="../pages/about" exact element={<About/>}></Route>

                <Route  path="../pages/contact" element={<Contact/>}></Route>

                <Route  path="../pages/gallary" element={<Gallary/>}></Route>
     
                <Route  path='../pages/service' element={<Service/>}></Route>

                <Route  path='../pages/employment' element={<Employment/>}></Route>
            </Routes>
        </div>

    
    );

}
export default Navbarcomp;
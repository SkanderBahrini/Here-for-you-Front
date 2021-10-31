import {Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (

        <div className="nav">

             <Navbar fixed="top "bg="dark" variant="dark">

    <Navbar.Brand href="#home"><img src="/images/death.png"  alt=""/>Here For you </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>< Link to="/home" className="link" > Home </Link></Nav.Link>
       <Nav.Link>< Link to="/ourservices" className="link" > Our Services </Link></Nav.Link>
  <Nav.Link>< Link to="/contactus" className="link" > Contact us  </Link></Nav.Link>
    </Nav>
  
  </Navbar>
        </div>
      );
}
 
export default Navigation;
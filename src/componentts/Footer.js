import { Navbar,Container } from "react-bootstrap";
const Footer = () => {
    return ( 

        <div className="footer">
            <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
  <Container>
    <Navbar.Brand href="#">Call us (+216)454545</Navbar.Brand>
  </Container>
</Navbar>
        </div>
    );
}
 
export default Footer;
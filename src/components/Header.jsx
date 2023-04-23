import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav';

const Header= () => {
  return (
    <div>
<Container>
  <Row>
    <Col>
    <div style={{border:"1px solid black"}}>
    <h1>Woxro</h1>
    <h6>THINK BIG. WE MAKE IT POSSIBLE</h6>
    </div>
    <Navbar bg="dark" variant="dark" expand='md'>
<Container>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className='fw-bold'>
<Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="#aboutus">About US</Nav.Link>
             <Nav.Link href="/services">Services</Nav.Link>
             <Nav.Link href="#thechnology">Technology</Nav.Link>
             <Nav.Link href="#careers">Careers</Nav.Link>
             <Nav.Link href="#blogs">Blogs</Nav.Link>
             <Nav.Link href="#ourwork">Our Work</Nav.Link>
             <Nav.Link href="/contact">Contact us</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
    </Navbar>
    </Col>
  </Row>
</Container>

    </div>
  )
}

export default Header



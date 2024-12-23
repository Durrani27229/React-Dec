import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='navbar-logo' href="#"><img
              src="../../public/Logo.png"
              width="227"
              height="64"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 fs-22 gap-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-item' href="#action1">For Individuals</Nav.Link>
            <Nav.Link className='nav-item' href="#action2">For Employers</Nav.Link>
            <Nav.Link className='nav-item' href="#action2">News & Report</Nav.Link>
            <Nav.Link className='nav-item' href="#action2">About Us</Nav.Link>
          </Nav>
        <Button className='nav-left-btn ms-5'>Schedule A Free Case Evalution</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
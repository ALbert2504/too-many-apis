import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

// Constants
import { navLinks } from '../../utils/constants';

const Header = () => {
  const navLinksContent = (
    navLinks.map(({ href, label }) => {
      return (
        <Link className="nav-link" to={href} key={href}>{label}</Link>
      );
    })
  );

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">API տեղատարափ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinksContent}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
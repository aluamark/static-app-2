import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function AppNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary px-3 border-bottom shadow-sm"
    >
      <Navbar.Brand href="#home">EduHub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#categories-section">Categories</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

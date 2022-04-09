import React from 'react'
import { Navbar, Button, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import Search from "./Search"
type Props = {}

const NavbarWeb = (props: Props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="text-success">Vegefoods</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Shop" id="">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="post">Blog</Nav.Link>
              <Nav.Link href="about" >About</Nav.Link>
              <Nav.Link href="contact" >Contact</Nav.Link>
            </Nav>
            <Search />
            <Dropdown style={{ marginLeft: "10px" }}>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="light">
                <NavDropdown.Item href="signup">Sigin Up</NavDropdown.Item>
                <NavDropdown.Item href="signin">Sigin In</NavDropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#" >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarWeb
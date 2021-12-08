import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    cookies.remove('_s');
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="success" variant="dark">
        <Container>

          <Navbar.Brand href="/" id="navbar-in" className="tittle-navbar">
            Diabet
            <span id="navbar-sub-brand"> Book</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              <Nav.Link href="/crudSimple">Registros</Nav.Link>
              
            </Nav>

            <DropdownButton title="Usuario" className="dropdown">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>DiabetBook</Row>
              </Dropdown.Header>
              <Dropdown.Item href="/inicio">Inicio</Dropdown.Item>
              <Dropdown.Item href="/crudSimple">Registros </Dropdown.Item>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Nav.Link href="/login">Login</Nav.Link>
              
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
              </Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

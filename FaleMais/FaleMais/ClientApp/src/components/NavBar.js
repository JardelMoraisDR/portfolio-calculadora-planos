import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavBar extends Component {
    static displayName = NavBar.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            opacity: 0
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (

            <Navbar className="navbar-menu mb-3 mt-2" expand="lg">
                <Container>
                    <Navbar.Brand id="navBrand" href="#home">Fale<strong>Mais!</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Planos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">FaleMais 30</NavDropdown.Item>
                                <NavDropdown.Item href="#">FaleMais 60</NavDropdown.Item>
                                <NavDropdown.Item href="#">FaleMais 120</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Para empresas</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Clientes</Nav.Link>
                        </Nav>
                        <Form>
                            <Button id="btnLogin" variant="outline-secondary">Área do cliente</Button>
                            <Link to="calculator">
                                <Button variant="primary">COMPARAR PLANOS</Button>
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        );
    }
}

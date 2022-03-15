import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header2 = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Todo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Tarjetas de regalo</Nav.Link>
                        <Nav.Link href="#features">Prime</Nav.Link>
                        <Nav.Link href="#pricing">Los mas vendidos</Nav.Link>
                        <Nav.Link href="#home">AmazonBasics</Nav.Link>
                        <Nav.Link href="#features">Computo y tablets</Nav.Link>
                        <Nav.Link href="#pricing">Los mas regalados</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Electrónicos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Los más vendidos</Nav.Link>
                        <Nav.Link href="#features">Televisón y video</Nav.Link>
                        <Nav.Link href="#pricing">Computo y tabletas</Nav.Link>
                        <Nav.Link href="#pricing">Audio y equipos de sonido</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header2
import { Container, Nav, Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget";
import './CartWidget.css'; //Los archivos que no son JS hay q ponerles la extensión

const NavBar = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Mis Cuadros
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Cuadros">Cuadros</Nav.Link>
                    <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#Contacto">Contacto</Nav.Link>

                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;
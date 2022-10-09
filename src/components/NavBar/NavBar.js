import { Container, Nav, Navbar } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";


const NavBar = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Mis Cuadros</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                    <Nav.Link as={Link} to='/category/cuadros'>Cuadros</Nav.Link>
                    <Nav.Link as={Link} to='/category/esculturas'>Esculturas</Nav.Link>              
                    
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;
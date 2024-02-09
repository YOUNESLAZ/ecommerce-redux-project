import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Redux-Movies</Navbar.Brand>
        <Link to={'/Ecommerce'} ><button> Ecommerce </button></Link> 
      </Container>
    </Navbar>
  );
}

export default Navb;

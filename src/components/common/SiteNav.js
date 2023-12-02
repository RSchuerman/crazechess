import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";
import { signOut } from "@aws-amplify/auth";

function SiteNav(props) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await signOut();

      props.updateAuthStatus(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Reed Chess</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {props.isAuthenticated !== false && (
              <Nav className="ms-md-auto">
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            )}
            {props.isAuthenticated === false && (
              <Nav className="ms-md-auto">
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default SiteNav;

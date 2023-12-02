import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/crazelogo.png";

function HomePage(props) {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src={logo} fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Reed Chess</h1>
          {props.isAuthenticated === false && (
            <>
              <p className="m-4">This is a chess game. Login to see more!</p>
              {/* <Link to="/login">
                <Button varient="outline-primary">Login</Button>
              </Link> */}
            </>
          )}
          {props.isAuthenticated !== false && (
            <>
              <p className="m-4">This is a chess game. Continue to play!</p>
              <Link to="/play">
                <button className="clkbtn">Play</button>
              </Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

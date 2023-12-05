import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../../assets/crazelogo.png";

function HomePage({ isAuthenticated }) {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src={logo} fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Reed Chess</h1>
          {isAuthenticated === false && (
            <>
              <p>This is a chess game. Choose a game option! Login to see more!</p>
              <Link to="/login">
                <button className="clkbtn2">Login</button>
              </Link>
              <Link to="/playAI">
                <button className="clkbtn2">Play AI</button>
              </Link>
              <Link to="/play">
                <button className="clkbtn2">Play Co-op</button>
              </Link>
            </>
          )}
          {isAuthenticated !== false && (
            <>
              <p>This is a chess game. Choose a game option!</p>
              <Link to="/games">
                <button className="clkbtn2">Play Online</button>
              </Link>
              <Link to="/playAI">
                <button className="clkbtn2">Play AI</button>
              </Link>
              <Link to="/play">
                <button className="clkbtn2">Play Co-op</button>
              </Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

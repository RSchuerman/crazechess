import "./LoginPage.css";
import { useState } from "react";
// import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Amplify } from "aws-amplify";
import { signIn, signUp, autoSignIn } from "@aws-amplify/auth";
// import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

function LogInPage(props) {
  const navigate = useNavigate();
  //   const [isMoveSlider, setIsActive] = useState(false);
  //   const [isFormSectionMove, setIsActive2] = useState(false);
  //   let sliderClassNames = classNames("slider", { moveslider: isMoveSlider });
  //   let formSectionClassNames = classNames("form-section", {
  //     form_section_move: isFormSectionMove,
  //   });
  //   const handleClick = () => {
  //     setIsActive(!isMoveSlider);
  //     setIsActive2(!isFormSectionMove);
  //   };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleAutoSignIn() {
    try {
      const signInOutput = await autoSignIn();
      // handle sign-in steps
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignUp() {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true,
        },
      });

      navigate("/validate");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogin() {
    try {
      const { isSignedIn, nextStep } = await signIn(username, password);

      props.updateAuthStatus(true);
      navigate("/play");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlid="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="txt"
                placeholder="Enter Username"
                onChange={(evt) => setUsername(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                min-length="8"
                placeholder="Enter Password"
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlid="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="txt"
                placeholder="Enter Username"
                onChange={(evt) => setUsername(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                min-length="8"
                placeholder="Enter Password"
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlid="formConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                min-length="8"
                placeholder="Confirm Password"
                onChange={(evt) => setConfirmPassword(evt.target.value)}
              />
            </Form.Group> */}
            <Button variant="primary" type="submit" onClick={handleSignUp}>
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    // <div className="body">
    //   <div className="container1">
    //     <div className={sliderClassNames}></div>
    //     <div className="btn">
    //       <button className="login" onClick={handleClick}>
    //         Login
    //       </button>
    //       <button className="signup" onClick={handleClick}>
    //         Signup
    //       </button>
    //     </div>

    //     <div className={formSectionClassNames}>
    //       <form id="LoginForm">
    //         <div className="login-box">
    //           <input
    //             type="text"
    //             className="name ele"
    //             placeholder="Enter your Username"
    //             // onChange={(evt) => setUsername(evt.target.value)}
    //           />
    //           <input
    //             type="password"
    //             className="password ele"
    //             placeholder="password"
    //             //onChange={(evt) => setPassword(evt.target.value)}
    //           />
    //           <button
    //             className="clkbtn"
    //             //onClick={handleLogin}
    //           >
    //             Login
    //           </button>
    //           <a className="guest-text" href="/">
    //             Continue to play as guest.
    //           </a>
    //         </div>
    //       </form>

    //       <form id="SignUpForm">
    //         <div className="signup-box">
    //           <input
    //             type="text"
    //             className="name ele"
    //             placeholder="Enter your Username"
    //             //onChange={(evt) => setUsername(evt.target.value)}
    //           />
    //           <input
    //             type="email"
    //             className="email ele"
    //             placeholder="youremail@email.com"
    //             //onChange={(evt) => setEmail(evt.target.value)}
    //           />
    //           <input
    //             type="password"
    //             className="password ele"
    //             placeholder="password"
    //             //onChange={(evt) => setPassword(evt.target.value)}
    //           />
    //           <input
    //             type="password"
    //             className="password ele"
    //             placeholder="Confirm password"
    //             //onChange={(evt) => setConfirmPassword(evt.target.value)}
    //           />
    //           <button
    //             className="clkbtn"
    //             //onClick={handleSignUp}
    //           >
    //             Signup
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LogInPage;

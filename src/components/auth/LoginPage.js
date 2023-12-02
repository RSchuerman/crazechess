import "./LoginPage.css";
import { Component, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Amplify } from "aws-amplify";
import { signIn, signUp, autoSignIn } from "@aws-amplify/auth";
// import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

function LogInPage(props) {
  const navigate = useNavigate();

  const [isMoveSlider, setIsActive] = useState(false);
  const [isFormSectionMove, setIsActive2] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [preferred_username, setPreferredUserName] = useState("");

  let sliderClassNames = classNames("slider", { moveslider: isMoveSlider });
  let formSectionClassNames = classNames("form-section", {
    form_section_move: isFormSectionMove,
  });

  const handleClick = () => {
    setIsActive(!isMoveSlider);
    setIsActive2(!isFormSectionMove);
    setUsername("");
    setPassword("");
    setEmail("");
    setPreferredUserName("");
  };

  //   async function handleAutoSignIn() {
  //     try {
  //       const signInOutput = await autoSignIn();
  //       // handle sign-in steps
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  async function handleSignUp(event) {
    event.preventDefault();
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            preferred_username,
          },
          autoSignIn: true,
        },
      });

      if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        navigate("/validate");
      } else {
        console.log(nextStep, isSignUpComplete, userId);
      }
    } catch (err) {
      console.log(err);
      if (err) {
        alert(err);
      }
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });

      props.updateAuthStatus(true);
      navigate("/play");
      console.log(isSignedIn, nextStep);
    } catch (err) {
      console.log(err);
      if (err) {
        alert(err);
      }
    }
  }

  return (
    <div className="body">
      <div className="container1">
        <div className={sliderClassNames}></div>
        <div className="btn">
          <button className="login" onClick={handleClick}>
            Login
          </button>
          <button className="signup" onClick={handleClick}>
            Signup
          </button>
        </div>

        <div className={formSectionClassNames}>
          <form id="LoginForm">
            <div className="login-box">
              <input
                type="text"
                className="name ele"
                placeholder="Username"
                onChange={(evt) => setUsername(evt.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Password"
                onChange={(evt) => setPassword(evt.target.value)}
              />
              <button className="clkbtn" onClick={handleLogin}>
                Login
              </button>
              {/* <a className="guest-text" href="/play">
                Continue to play as guest.
              </a> */}
            </div>
          </form>

          <form id="SignUpForm">
            <div className="signup-box">
              <input
                type="text"
                className="name ele"
                placeholder="Username"
                onChange={(evt) => {
                  setUsername(evt.target.value);
                  setPreferredUserName(evt.target.value);
                }}
              />
              <input
                type="email"
                className="email ele"
                placeholder="example@email.com"
                onChange={(evt) => setEmail(evt.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Password"
                onChange={(evt) => setPassword(evt.target.value)}
              />
              {/* <input
                type="password"
                className="password ele"
                placeholder="Confirm password"
                onChange={(evt) => setConfirmPassword(evt.target.value)}
              /> */}
              <button className="clkbtn" onClick={handleSignUp}>
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;

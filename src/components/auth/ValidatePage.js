import "./LoginPage.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { confirmSignUp, autoSignIn } from "@aws-amplify/auth";

function ValidatePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUserName] = useState(location.username);
  const [authenticationCode, setAuthenticationCode] = useState("");

  async function handleRegisterConfirmation(event) {
    event.preventDefault();
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode: authenticationCode,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
      if (err) {
        alert(err);
      }
    }
  }

  async function handleAutoSignIn() {
    try {
      const signInOutput = await autoSignIn();
      // handle sign-in steps
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="body">
      <div className="container1">
        <div className="login-box">
          <h1 className="login">Validate</h1>
          <input
            type="text"
            className="name ele"
            placeholder="Username"
            onChange={(evt) => setUserName(evt.target.value)}
          />
          <input
            type="text"
            className="name ele"
            placeholder="Enter Authentication Code"
            onChange={(evt) => setAuthenticationCode(evt.target.value)}
          />
          <button className="clkbtn" onClick={handleRegisterConfirmation}>
            Validate
          </button>
        </div>
      </div>
    </div>
  );
}

export default ValidatePage;

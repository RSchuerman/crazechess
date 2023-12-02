import "./LoginPage.css";
import { useState } from "react";
import classNames from "classnames";

import { useNavigate } from "react-router-dom";
// import { Amplify, Auth } from "aws-amplify";
// import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// import awsExports from "../../aws-exports";
// Amplify.configure(awsExports);

function LogInPage() {
  const [isMoveSlider, setIsActive] = useState(false);
  const [isFormSectionMove, setIsActive2] = useState(false);
  let sliderClassNames = classNames("slider", { moveslider: isMoveSlider });
  let formSectionClassNames = classNames("form-section", {
    form_section_move: isFormSectionMove,
  });
  const handleClick = () => {
    setIsActive(!isMoveSlider);
    setIsActive2(!isFormSectionMove);
  };
  const navigate = useNavigate();
  const continueGuest = () => {
    navigate("/");
  };

  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [email, setEmail] = useState("");

  //   const handleSignUp = async () => {
  //     try {
  //       const { user } = await Auth.signUp({
  //         username: username.toLowerCase(),
  //         password: password,
  //         attributes: {
  //           email: email.toLowerCase(),
  //         },
  //         autoSignIn: {
  //           enabled: true,
  //         },
  //       });

  //       navigate("/validate");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const handleLogin = async () => {
  //     try {
  //       await Auth.signIn(username, password);

  //       navigate("/");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div className="body">
      <div className="container">
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
                placeholder="Enter your Username"
                // onChange={(evt) => setUsername(evt.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
                //onChange={(evt) => setPassword(evt.target.value)}
              />
              <button
                className="clkbtn"
                //onClick={handleLogin}
              >
                Login
              </button>
              <p
                className="guest-text"
                //onClick={continueGuest}
              >
                Continue to play as guest.
              </p>
            </div>
          </form>

          <form id="SignUpForm">
            <div className="signup-box">
              <input
                type="text"
                className="name ele"
                placeholder="Enter your Username"
                //onChange={(evt) => setUsername(evt.target.value)}
              />
              <input
                type="email"
                className="email ele"
                placeholder="youremail@email.com"
                //onChange={(evt) => setEmail(evt.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
                //onChange={(evt) => setPassword(evt.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Confirm password"
                //onChange={(evt) => setConfirmPassword(evt.target.value)}
              />
              <button
                className="clkbtn"
                //onClick={handleSignUp}
              >
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

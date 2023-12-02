import "./LoginPage.css";
import { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

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
                type="email"
                className="email ele"
                placeholder="youremail@email.com"
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
              />
              <button className="clkbtn">Login</button>
              <p className="guest-text" onClick={continueGuest}>
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
              />
              <input
                type="email"
                className="email ele"
                placeholder="youremail@email.com"
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
              />
              <input
                type="password"
                className="password ele"
                placeholder="Confirm password"
              />
              <button className="clkbtn">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;

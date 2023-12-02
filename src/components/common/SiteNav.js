import "./SiteNav.css";

import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function SiteNav(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.logOut();
  };
  return (
    <header className="nav">
      <p className="link" onClick={navigate("/")}>
        Home
      </p>
      <p className="link">Co-op Board</p>
      <p className="link">Player vs Computer</p>
      <p className="link" onClick={navigate("/login")}>
        Login
      </p>
      <p onClick={handleLogout}>Logout</p>
    </header>
  );
}

export default SiteNav;

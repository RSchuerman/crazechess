import "./SiteNav.css";

function SiteNav(props) {
  const handleLogout = () => {
    props.logOut();
  };
  return (
    <header className="nav">
      <a className="link" href="/">
        Home
      </a>
      <p className="link">Co-op Board</p>
      <p className="link">Player vs Computer</p>
      <a className="link" href="/login">
        Login
      </a>
      <p onClick={handleLogout}>Logout</p>
    </header>
  );
}

export default SiteNav;

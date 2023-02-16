import "./navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="name">
        <p>Tazim</p>
      </div>
      <ul className="aboutNavbar">
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
        <button>Resume</button>
      </ul>
    </div>
  );
}

export default NavBar;

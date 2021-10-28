import "./Navbar.css";
import NavItem from "./navItem/NavItem";
import CheckScrollDown from "./checkScrollDown/CheckScrollDown";

const Navbar = ({ theme, themeToggle }) => {
  const isScrollDown = CheckScrollDown(300);
  const navSmall = isScrollDown && "nav-small"

  return (
    <div className={`nav outter-shadow ${theme} ${navSmall}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home"><h4>Naruebes</h4></a>
        </div>

        <div className="nav-theme">
          <div onClick={() => themeToggle()}
            className={`nav-theme-toggle inner-shadow ${theme}`}>
            <i className={`bi bi-sun-fill sun-icon ${theme}`}></i>
            <i className={`bi bi-moon-fill moon-icon ${theme}`}></i>
            <div className={`theme-toggle-btn curve-box ${theme}`}></div>
          </div>
        </div>

        <div className="nav-items">
          <NavItem to="home" />
          <NavItem to="projects" />
          <NavItem to="about" />
          <NavItem to="contact" />
        </div>

        <div className="nav-menus-toggle">
          <NavItem to="home" />
          <NavItem to="projects" />
          <NavItem to="about" />
          <NavItem to="contact" />
        </div>
      </div>
    </div >
  )
}

export default Navbar

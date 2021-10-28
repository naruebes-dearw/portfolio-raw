import "./Navbar.css";
import NavItem from "./navItem/NavItem";
import CheckScrollDown from "./checkScrollDown/CheckScrollDown";
import { useEffect, useRef, useState } from "react";

function OutsideClick(ref, { isClicked, setIsClicked }) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isClicked;
}

const Navbar = ({ theme, themeToggle }) => {
  const [isClicked, setIsClicked] = useState(true);
  const boxRef = useRef(null);
  const boxOutsideClick = OutsideClick(boxRef, { isClicked, setIsClicked });
  const showSidebar = !boxOutsideClick && 'show-sidebar'

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

        <button
          onClick={() => setIsClicked(false)}
          className={`nav-menus-toggle btn-shadow ${theme}`}>
          <i className="bi bi-list"></i>
        </button>

        <div
          ref={boxRef}
          onBlur={() => setIsClicked(true)}
          className={`nav-items outter-shadow ${showSidebar} ${theme}`}>
          <NavItem to="home" />
          <NavItem to="projects" />
          <NavItem to="about" />
          <NavItem to="contact" />
        </div>

        {/* <div className="nav-menus-toggle">
          <NavItem to="home" />
          <NavItem to="projects" />
          <NavItem to="about" />
          <NavItem to="contact" />
        </div> */}
      </div>
    </div >
  )
}

export default Navbar;

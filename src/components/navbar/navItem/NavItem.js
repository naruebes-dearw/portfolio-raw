import "./NavItem.css";

const NavItem = ({ to }) => {
  return (
    <a href={`#${to}`} className="nav-item">
      <h4>{to}</h4>
    </a>
  )
}

export default NavItem

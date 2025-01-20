import { NavLink } from "react-router-dom";
import NavWrapper from "../styles/NavWrapper";

function Nav() {
  return (
    <NavWrapper>
      <NavLink
        to="/"
        aria-label="Link to Home page"
        className={({ isActive }) => (isActive ? "activeStyle" : null)}>
        Home
      </NavLink>

      <NavLink
        to="/about"
        aria-label="Link to About page"
        className={({ isActive }) => (isActive ? "activeStyle" : null)}>
        About
      </NavLink>
    </NavWrapper>
  );
}

export default Nav;

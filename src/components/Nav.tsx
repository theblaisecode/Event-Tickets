import { NavLink } from "react-router-dom";
import NavWrapper from "../styles/NavWrapper";

function Nav() {
  return (
    <NavWrapper>
      <NavLink
        to="/"
        aria-label="Link to Home page"
        className={({ isActive }) => (isActive ? "activeStyle" : "")}>
        Home
      </NavLink>

      <NavLink
        to="/code-of-conduct"
        aria-label="Link to Code of Conduct page"
        className={({ isActive }) => (isActive ? "activeStyle" : "")}>
        Code of Conduct
      </NavLink>
    </NavWrapper>
  );
}

export default Nav;

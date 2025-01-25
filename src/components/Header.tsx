import Nav from "./Nav";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HeaderWrapper from "../styles/HeaderWrapper";

function Header() {
  return (
    <HeaderWrapper className="header">
      <Link to="/" className="logo">
        <img src={logo} aria-label="Link to Home Page" alt="Coding Conf Logo" />
        <span>Coding Conf Event</span>
      </Link>

      <Nav />
    </HeaderWrapper>
  );
}

export default Header;

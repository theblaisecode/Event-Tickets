import Nav from "./Nav";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HeaderWrapper from "../styles/HeaderWrapper";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="in to Home Page" />
        <span>Coding Conf Event</span>
      </Link>

      <Nav />
    </HeaderWrapper>
  );
}

export default Header;

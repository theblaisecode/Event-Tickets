import { Link } from "react-router-dom";
import PopUpWrapper from "../styles/PopUpWrapper";
import Heading from "./Heading";
import logo from "../assets/logo.png";
import { HiXMark } from "react-icons/hi2";


type PopupProp = {
  name: string;
  email: string;
  closePopup: () => void;
};

function PopUp(props: PopupProp) {
  const text = `Congrats, ${props.name}! Your ticket is ready. `;
  const subtext = `We've emailed your ticket to ${props.email} and will send updates in the run up to the event.`;

  return (
    <PopUpWrapper>
      <div className="popUpContent">
        <div className="head">
          <Link to="/" className="logo">
            <img
              src={logo}
              aria-label="Link to Home Page"
              alt="Coding Conf Logo"
            />
            <span>Coding Conf Event</span>
          </Link>

          <button className="closebutton" onClick={props.closePopup}>
            <HiXMark/>
          </button>
        </div>

        <Heading text={text} subtext={subtext} />
      </div>
    </PopUpWrapper>
  );
}

export default PopUp;

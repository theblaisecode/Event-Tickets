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
  const title = (
    <>
      Congrats, <span className="highlight">Jonathan Kristof</span>! Your ticket
      is ready.
    </>
  );
  const subtitle = (
    <>
      We've emailed your ticket to <span>theblaisecode@gmail.com</span> and will
      send updates in the run up to the event.
    </>
  );
  // const text = (
  //   <>
  //     Congrats,
  //     <span className="highlight">{props.name}</span>! Your ticket is ready.
  //   </>
  // );

  // const subtext = (
  //   <>
  //     We've emailed your ticket to <span>{props.email}</span> and will send
  //     updates in the run up to the event.
  //   </>
  // );

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
            <HiXMark />
          </button>
        </div>

        <div className="contentTop">
          <Heading text={title} subtext={subtitle} />
        </div>

        <div className="contentBottom">
          <div className="leftContent">
            <div className="logo">
              <img src={logo} alt="Coding Conf Logo" />
              <span>Coding Conf</span>
            </div>

            <div className="date">{} / Lagos, NG</div>
          </div>

          <div className="rightContent">
    
          </div>
        </div>
      </div>
    </PopUpWrapper>
  );
}

export default PopUp;

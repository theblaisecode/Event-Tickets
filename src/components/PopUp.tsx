import { Link } from "react-router-dom";
import PopUpWrapper from "../styles/PopUpWrapper";
import Heading from "./Heading";
import logo from "../assets/logo.png";
import fulllogo from "../assets/fullLogo.png";
import ticketImg from "../assets/ticket.png";
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

  const currentDate = new Date();
  const eventDate = new Date();
  eventDate.setDate(currentDate.getDate() + 14);

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
              src={fulllogo}
              aria-label="Link to Home Page"
              alt="Coding Conf Logo"
            />
          </Link>

          <button className="closebutton" onClick={props.closePopup}>
            <HiXMark />
          </button>
        </div>

        <div className="contentTop">
          <Heading text={title} subtext={subtitle} />
        </div>

        <div className="contentBottom">
          <img src={ticketImg} alt="" className="ticket" />

          <div className="ticketContent">
            <div className="leftContent">
              <div className="eventDetails">
                <div className="logo">
                  <img src={fulllogo} alt="Coding Conf Logo" />
                </div>

                <div className="date">
                  {eventDate.toLocaleDateString("en-US", {
                    month: "short", // Abbreviated month (e.g., "Feb")
                    day: "2-digit", // Day as two digits (e.g., "04")
                    year: "numeric", // Full year (e.g., "2025")
                  })}{" "}
                  / Lagos, NG
                </div>
              </div>

              <div className="attendee">
                
              </div>
            </div>

            <div className="rightContent"></div>
          </div>
        </div>
      </div>
    </PopUpWrapper>
  );
}

export default PopUp;

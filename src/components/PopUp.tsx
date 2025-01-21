import { Link } from "react-router-dom";
import PopUpWrapper from "../styles/PopUpWrapper";
import Heading from "./Heading";
import fulllogo from "../assets/fullLogo.png";
import ticketImg from "../assets/ticket.png";
import { HiXMark } from "react-icons/hi2";
import html2canvas from "html2canvas";

type PopupProp = {
  image: string;
  name: string;
  email: string;
  username: string;
  closePopup: () => void;
};

function PopUp(props: PopupProp) {
  const currentDate = new Date();
  const eventDate = new Date();
  eventDate.setDate(currentDate.getDate() + 14);

  const ticketNumber = Math.floor(Math.random() * 90000) + 10000;

  const title = (
    <>
      Congrats, <span className="highlight">{props.name}</span>! Your ticket is
      ready.
    </>
  );

  const subtitle = (
    <>
      We've emailed your ticket to <span>{props.email}</span> and will send
      updates in the run up to the event.
    </>
  );

  // Function to download content as image
  const downloadTicket = () => {
    const content: Element | null = document.querySelector(".contentBottom");
    if (content) {
      html2canvas(content, {
        backgroundColor: "#04021e", // Set the background color of the canvas
      }).then((canvas) => {
        // Create a link to download the image
        const link = document.createElement("a");
        link.href = canvas.toDataURL(); // Convert canvas to image URL
        link.download = "ticket.png"; // Specify the name of the file
        link.click(); // Trigger download
      });
    }
  };

  return (
    <PopUpWrapper>
      <div className="popUpContent">
        <div className="head">
          <div className="logo">
            <img src={fulllogo} alt="Coding Conf Logo" />
          </div>

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
                <img src={props.image} alt="" />

                <div className="attendeeInfo">
                  <h3>{props.name}</h3>
                  <span>@{props.username}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rightContent">
            <p>#{ticketNumber}</p>
          </div>
        </div>

        <div className="download">
          <button className="btn" onClick={downloadTicket}>
            Download Ticket
          </button>
        </div>
      </div>
    </PopUpWrapper>
  );
}

export default PopUp;

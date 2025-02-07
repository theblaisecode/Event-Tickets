import styled from "styled-components";
import bg from "../assets/background.png";

const PopUpWrapper = styled.div`
  background-color: #06011c;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--textLight);
  font-size: 1.6rem;
  background: url(${bg}) no-repeat center bottom;
  z-index: 1;

  .popUpContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--textLight);
    font-size: 2.2rem;
    font-weight: 600;
  }

  .head {
    position: relative;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
  }

  .closebutton {
    position: absolute;
    right: 0;
    background: none;
    color: var(--primary);
    font-size: 3.5rem;
    font-weight: 500;
    outline: none;
    border: none;
  }

  a.logo {
    display: block;
    width: 30%;
  }

  a.logo img {
    width: 100%;
  }

  .contentTop {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .contentTop .title {
    width: 65%;
  }

  .title span {
    font-weight: 700;
    background: linear-gradient(to right, #f57463, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .contentTop .subTitle {
    width: 45%;
  }

  .subTitle span {
    color: var(--primary);
  }

  .contentBottom {
    margin-top: 8rem;
    width: 45%;
    position: relative;
  }

  .contentBottom .ticket {
    width: 100%;
    position: relative;
  }

  .ticketContent {
    position: absolute;
    top: 48%;
    left: 48%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: var(--textGray);
    width: 90%;
    text-align: center;
    padding: 1rem;
  }

  .contentBottom .logo {
    width: 45%;
  }

  .eventDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .leftContent {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .date {
    font-size: 1.3rem;
    margin-left: 5rem;
    margin-top: 0.3rem;
  }

  .attendee {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
  }

  .attendee img {
    width: 7rem;
    height: 7rem;
    border-radius: 1rem;
  }

  .attendeeInfo {
    color: var(--textLight);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .attendeeInfo span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
  }

  .attendeeInfo img.github {
    width: 1.5rem;
    height: 1.5rem;
  }

  .rightContent {
    position: absolute;
    transform: rotate(90deg);
    font-size: 2.2rem;
    top: 43%;
    right: 2%;
    color: var(--textGray);
  }

  .download {
    width: 45%;
    margin-top: 4rem;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    .head {
      width: 100%;
    }

    .contentTop .title {
      width: 100%;
    }

    .contentTop .subTitle {
      width: 100%;
    }

    .contentBottom {
      margin-top: 4rem;
      width: 100%;
    }

    .contentBottom .logo img {
      width: 120%;
    }

    .date {
      font-size: 1.2rem;
      margin-left: 3.5rem;
      margin-top: 0.2rem;
    }

    .attendee img {
      width: 5rem;
      height: 5rem;
    }

    .attendeeInfo span {
      font-size: 1.2rem;
    }

    .rightContent {
      font-size: 2rem;
      top: 41.5%;
      right: 1%;
    }

    .download {
      width: 100%;
    }

    .closebutton {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 550px) and (max-width: 950px) {
    .contentTop .title,
    .contentTop .subTitle,
    .contentBottom,
    .download {
      width: 80%;
    }

    .date {
      margin-left: 4.2rem;
    }
  }

  @media (min-width: 600px) and (max-width: 950px) {
    .contentBottom,
    .download {
      width: 60%;
    }

    .date {
      margin-left: 3.5rem;
    }
  }

  @media (min-width: 700px) and (max-width: 950px) {
    .date {
      margin-left: 4.5rem;
    }

    .rightContent {
      right: 2%;
    }
  }

  @media (min-width: 800px) and (max-width: 950px) {
    .contentBottom,
    .download {
      width: 50%;
    }

    .date {
      margin-left: 4.5rem;
    }
  }
`;

export default PopUpWrapper;

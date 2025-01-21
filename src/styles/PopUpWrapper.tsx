import styled from "styled-components";
import bg from "../assets/background.png";

const PopUpWrapper = styled.div`
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

  .logo {
    width: 70%;
  }

  .logo img {
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
    margin-top: 10rem;
    width: 45%;
    position: relative;
  }

  .contentBottom .ticket {
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .ticketContent {
    position: absolute;
    top: 20%;
    left: 24%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: var(--textGray);
    width: 90%;
    text-align: center;
    padding: 1rem;
  }

  .eventDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contentBottom .logo {
    width: 45%;
  }

  .date {
    font-size: 1.3rem;
    margin-left: 6rem;
    margin-top: 0.3rem;
  }

  .rightContent {
    position: absolute;
    transform: rotate(90deg);
    font-size: 2.2rem;
    top: 43%;
    right:2%;
    color: var(--textGray)
  }
`;

export default PopUpWrapper;

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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
    font-weight:700;
    background: linear-gradient(to right, #f57463, #fff);
    -webkit-background-clip: text; /* For WebKit browsers (Chrome, Safari) */
    background-clip: text; /* For other browsers that support it */
    color: transparent; /* Make the text color transparent to show the gradient */
  }

  .contentTop .subTitle {
    width: 45%;
  }

  .subTitle span {
    color: var(--primary);
  }
`;

export default PopUpWrapper;

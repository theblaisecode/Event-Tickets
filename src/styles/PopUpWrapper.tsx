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
    max-width: 400px;
    width: 100%;
  }
`;

export default PopUpWrapper;

import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 3%;
  left: 42%;

  a {
    color: var(--primary);
    text-decoration: underline;
    font-weight: bold;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    position: static;
    margin-top: 3rem;
    text-align: center;
    padding-bottom: 2rem;
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    position: static;
    margin-top: 3rem;
    text-align: center;
    padding-bottom: 2rem;
  }
`;

export default FooterWrapper;

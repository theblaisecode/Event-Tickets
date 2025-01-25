import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

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

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    gap: 3rem;
    flex-direction: column !important;

    .logo img {
      width: 3rem;
    }
  }
`;

export default HeaderWrapper;

import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  gap: 3rem;

  a {
    border-bottom: 0.3rem solid transparent;
    transition: 0.4s;
  }

  a:hover {
    color: var(--primary);
    border-bottom: 0.3rem solid var(--primary);
    transition: all 0.4s;
  }

  .activeStyle {
    color: var(--primary);
    border-bottom: 0.3rem solid var(--primary);
    transition: all 0.4s ease-in-out;
  }
`;

export default NavWrapper;

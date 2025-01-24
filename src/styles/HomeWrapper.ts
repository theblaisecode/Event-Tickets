import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  .title {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    width: 35%
  }

  .subTitle{
    color: var(--textGray);
    font-size: 1.8rem;
    padding-top: .8rem;
  }

  .none {display: none;}
`;

export default HomeWrapper;

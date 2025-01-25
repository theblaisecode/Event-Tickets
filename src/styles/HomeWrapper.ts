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
    width: 35%;
  }

  .subTitle {
    color: var(--textGray);
    font-size: 1.8rem;
    padding-top: 0.8rem;
    text-align: center;
  }

  .none {
    display: none;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    /* gap: 3rem;
    flex-direction: column !important; */

    .title {
      font-size: 3rem;
      width: 100%;
    }

    .subTitle {
      font-size: 1.7rem;
      padding-top: 1.5rem;
    }
  }

  @media (min-width: 550px) and (max-width: 950px) {
    .title {
      font-size: 3rem;
      width: 80%;
    }
    
    .subTitle {
      width: 80%;
      font-size: 1.7rem;
      padding-top: 1.5rem;
    }
  }
  
  @media (min-width: 951px) and (max-width: 1200px) {
    .title {
      font-size: 3.5rem;
      width: 70%;
    }

    .subTitle {
      width: 80%;
    }
  }
`;

export default HomeWrapper;

import styled from "styled-components";

const CodeOfConductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  .title {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    width: 35%;
  }

  .subTitle {
    margin-top: 1rem;
    color: #c9c9c9;
    font-size: 1.8rem;
    padding-top: 0.8rem;
    width: 45%;
    text-align: center;
  }

  .title span {
    font-weight: 700;
    background: linear-gradient(to right, #f57463, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  ol {
    margin-top: 5rem;
    width: 53%;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  li {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    .title {
      font-size: 3rem;
      width: 100%;
    }

    .subTitle {
      font-size: 1.7rem;
      padding-top: 0.8rem;
      width: 100%;
    }

    ol {
      margin-top: 3rem;
      width: 100%;
      gap: 3rem;
      list-style: none;
    }

    li {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }

  @media (min-width: 550px) and (max-width: 950px) {
    .title,
    .subTitle,
    ol {
      width: 80%;
    }
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    .title,
    .subTitle,
    ol {
      margin-top: 3rem;
      width: 85%;
    }
  }

  @media (min-width: 1201px) and (max-width: 1440px) {
    .title,
    .subTitle,
    ol {
      margin-top: 3rem;
      width: 80%;
    }
  }

  @media (min-width: 1441px) and (max-width: 1628px) {
    .title,
    .subTitle,
    ol {
      margin-top: 3rem;
      width: 73%;
    }
  }
`;

export default CodeOfConductWrapper;

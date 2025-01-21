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
    flex-direction:column;
    gap: 3.5rem;
  }

  li {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`;

export default CodeOfConductWrapper;

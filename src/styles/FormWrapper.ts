import styled from "styled-components";

const FormWrapper = styled.div`
  width: 20%;
  margin-top: 2rem;

  form,
  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    gap: 1rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 0.2rem solid var(--textGray);
    border-radius: 1rem;
    outline: none;
    background: var(--formBg);
  }

  label.image {
    height: 15rem;
  }

  input[type="file"] {
    height: 100%;
  }
`;

export default FormWrapper;

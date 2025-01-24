import styled from "styled-components";

const FormWrapper = styled.div`
  width: 20%;
  margin-top: 2rem;

  form {
    margin-top: 1rem;
  }

  form,
  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    gap: 1rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 0.2rem solid var(--textGray);
    border-radius: 1rem;
    outline: none;
    background: var(--formBg);
    color: var(--textLight);
  }

  .file-input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: 0.2rem dashed var(--textGray);
    border-radius: 1rem;
    padding: 1rem;
  }

  input[type="file"] {
    display: none;
    opacity: 0;
    position: static; // Remove the absolute positioning
    height: auto;
    width: auto;
    cursor: pointer; // Allow pointer events on the file input
  }

  .preview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  .preview-image {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 1rem;
    border: 0.1rem solid var(--textGray);
    margin-top: 10px;
  }

  .image-name {
    margin: 2rem 0;
    color: #ccc;
    font-size: 1.4rem;
  }

  .button-group {
    display: flex;
    gap: 0.5rem;
    margin: 1.5rem 0;
    z-index: 2; /* Ensure buttons are above the input[type="file"] */
  }

  .button-group button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background: var(--textGray);
    color: var(--textLight);
    cursor: pointer;
    transition: 0.3s;
  }

  .button-group button:hover {
    background: var(--primary);
    transition: all 0.3s;
  }

  input[type="file"]::-webkit-textfield-decoration-container,
  input[type="file"]::-webkit-file-upload-button {
    display: none;
  }

  .error-message,
  .message {
    color: red;
    font-size: 1.15rem;
    display: flex;
    align-items:center;
    gap: .5rem;
  }

  .message {
    color: var(--textGray);}
`;

export default FormWrapper;

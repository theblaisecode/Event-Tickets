import React, { useState } from "react";
import FormWrapper from "../styles/FormWrapper";
import { Form as TicketForm } from "react-router-dom";
import PopUp from "./PopUp";

function Form() {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    username: "",
  });

  const generateTicket = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);

    const imageFile = data.get("image") as File | null;
    const generate = {
      image: imageFile ? URL.createObjectURL(imageFile) : "",
      name: data.get("name") as string,
      email: data.get("email") as string,
      username: data.get("username") as string,
    };

    setFormData({
      image: generate.image,
      name: generate.name,
      email: generate.email,
      username: generate.username,
    });

    setIsPopUp(true);
  };

  const closePopUp = () => {
    setIsPopUp(false);
    // Reset the form fields
    const formElement = document.querySelector("form");
    formElement?.reset();
  };

  return (
    <FormWrapper>
      <TicketForm onSubmit={generateTicket}>
        <label className="image">
          <span>Upload Avatar</span>
          <input type="file" name="image" accept=".png, .jpg, .jpeg" />
        </label>

        <label>
          <span>Full Name</span>
          <input type="text" name="name" id="name" />
        </label>

        <label>
          <span>Email Address</span>
          <input type="email" name="email" id="email" />
        </label>

        <label>
          <span>Github Username</span>
          <input type="text" name="username" id="username" />
        </label>

        <button className="btn" type="submit">
          Generate My Ticket
        </button>
      </TicketForm>

      {isPopUp && (
        <PopUp
          closePopup={closePopUp}
          image={formData.image}
          name={formData.name}
          email={formData.email}
          username={formData.username}
        />
      )}
    </FormWrapper>
  );
}

export default Form;

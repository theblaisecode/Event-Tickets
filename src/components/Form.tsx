import React, { useState } from "react";
import FormWrapper from "../styles/FormWrapper";
import { ActionFunction, redirect, Form as TicketForm } from "react-router-dom";
import PopUp from "./PopUp";

function Form() {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);

  const generateTicket = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);

    const generate = {
      image: data.get("image"),
      name: data.get("name"),
      email: data.get("email"),
      username: data.get("username"),
    };

    console.log(generate);

    setIsPopUp(true)
  };

  const closePopUp = () => {
    setIsPopUp(false)
    window.location.href = "/"
  }

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

        <button type="submit">Generate My Ticket</button>
      </TicketForm>

      {isPopUp && <PopUp closePopup={closePopUp} />}
    </FormWrapper>
  );
}

// export const ticketFormAction: ActionFunction = async ({ request }) => {
//   console.log(request);

//   const data = await request.formData();
//   const generate = {
//     name: data.get("name"),
//     email: data.get("email"),
//     username: data.get("username"),
//   };

//   console.log(generate);

//   return redirect("/");
// };

export default Form;

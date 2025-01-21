import FormWrapper from "../styles/FormWrapper";
import { ActionFunction, redirect, Form as TicketForm } from "react-router-dom";

function Form() {
  return (
    <FormWrapper>
      <TicketForm method="POST" action="/">
        <label>
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
    </FormWrapper>
  );
}

export const ticketFormAction: ActionFunction = async ({ request }) => {
  console.log(request);

  const data = await request.formData();
  const generate = {
    name: data.get("name"),
    email: data.get("email"),
    username: data.get("username"),
  };

  console.log(generate);

  return redirect("/");
};

export default Form;

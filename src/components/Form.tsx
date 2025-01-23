import React, { useState } from "react";
import FormWrapper from "../styles/FormWrapper";
import { Form as TicketForm } from "react-router-dom";
import PopUp from "./PopUp";
import upload from "../assets/upload.png";

function Form() {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    username: "",
  });
  const [selectedImage, setSelectedImage] = useState<string>(upload);

  // Avatar
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(upload);
    }
  };

  // Generate Ticket
  const generateTicket = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);

    const imageFile = data.get("image") as File | null;

    const generate = {
      image: imageFile ? URL.createObjectURL(imageFile) : upload,
      name: data.get("name") as string,
      email: data.get("email") as string,
      username: data.get("username") as string,
    };

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Input validation
    if (generate.image === upload) {
      console.log("choose an image");
      return;
    } else if (generate.name === "") {
      console.log("Please enter a name");
      return;
    } else if (!emailRegex.test(generate.email)) {
      console.log("Please enter a valid email address");
      return;
    } else if (generate.username === "") {
      console.log("Please enter a username");
      return;
    } else {
      setFormData({
        image: generate.image,
        name: generate.name,
        email: generate.email,
        username: generate.username,
      });
    }

    if (!upload) {
      console.log("first");
    }

    setIsPopUp(true);
  };

  const closePopUp = () => {
    setIsPopUp(false);
    setSelectedImage(upload);
    // Reset the form 
    const formElement = document.querySelector<HTMLFormElement>("form");
    formElement?.reset();
  };

  return (
    <FormWrapper>
      <TicketForm onSubmit={generateTicket}>
        <label className="image">
          <span>Upload Avatar</span>

          <div className="file-input-wrapper">
            {/* Image preview */}
            <div className="preview-container">
              <img
                src={selectedImage}
                alt="Avatar Preview"
                className="preview-image"
              />
            </div>

            <div>
              {selectedImage === upload ? (
                <p className="image-name">Click to upload</p>
              ) : (
                <div className="button-group">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImage(upload);
                    }}>
                    Remove
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const inputElement = document.querySelector(
                        'input[name="image"]'
                      ) as HTMLInputElement;
                      inputElement?.click();
                    }}>
                    Change
                  </button>
                </div>
              )}
            </div>

            <input
              type="file"
              name="image"
              accept=".png, .jpg, .jpeg"
              onChange={handleImageChange}
            />
          </div>
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

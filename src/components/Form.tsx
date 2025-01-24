import React, { useState } from "react";
import FormWrapper from "../styles/FormWrapper";
import { Form as TicketForm } from "react-router-dom";
import PopUp from "./PopUp";
import upload from "../assets/upload.png";
import { MdInfoOutline } from "react-icons/md";

function Form() {
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    username: "",
  });
  const [selectedImage, setSelectedImage] = useState<string>(upload);
  const [errors, setErrors] = useState({
    image: "",
    name: "",
    email: "",
    username: "",
  });

  const validateForm = (data: {
    image: string;
    name: string;
    email: string;
    username: string;
  }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      image: data.image === upload ? "Please choose an image." : "",
      name: data.name === "" ? "Please enter a name." : "",
      email: !emailRegex.test(data.email)
        ? "Please enter a valid email address."
        : "",
      username: data.username === "" ? "Please enter a username." : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const generateTicket = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);
    const imageFile = data.get("image") as File | null;

    const generate = {
      image: selectedImage, // Use the current selectedImage state
      name: data.get("name") as string,
      email: data.get("email") as string,
      username: data.get("username") as string,
    };

    // Validate the form
    const isValid = validateForm(generate);

    if (!isValid) {
      return; // Stop form submission if validation fails
    }

    setFormData(generate);
    setIsPopUp(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 500000) {
        setErrors((prev) => ({
          ...prev,
          image: "File too large. Please upload a photo under 500KB.",
        }));
        return; // Exit early to prevent invalid image from being processed
      }

      setSelectedImage(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, image: "" })); // Clear image error if valid
    } else {
      setSelectedImage(upload);
      setErrors((prev) => ({
        ...prev,
        image: "Please choose an image.",
      }));
    }
  };

  const closePopUp = () => {
    setIsPopUp(false);
    setSelectedImage(upload);
    setFormData({
      image: "",
      name: "",
      email: "",
      username: "",
    });
    const formElement = document.querySelector<HTMLFormElement>("form");
    formElement?.reset();
  };

  return (
    <FormWrapper>
      <TicketForm onSubmit={generateTicket}>
        <label className="image">
          <span>Upload Avatar</span>
          <div className="file-input-wrapper">
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
                      setErrors((prev) => ({
                        ...prev,
                        image: "Please choose an image.",
                      }));
                    }}>
                    Remove
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      const inputElement =
                        document.querySelector<HTMLInputElement>(
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
          {errors.image ? (
            <p className="error-message">
              <MdInfoOutline /> {errors.image}
            </p>
          ) : (
            <p className="message">
              <MdInfoOutline />
              Upload your photo (JPG, JPEG or PNG, max size: 500KB)
            </p>
          )}
        </label>

        <label>
          <span>Full Name</span>
          <input type="text" name="name" id="name" />
          {errors.name ?
            <p className="error-message">
              <MdInfoOutline /> {errors.name}
            </p>
          : <p className="none"> jj</p> }
        </label>

        <label>
          <span>Email Address</span>
          <input type="email" name="email" id="email" />
          {errors.email && (
            <p className="error-message">
              <MdInfoOutline /> {errors.email}
            </p>
          )}
        </label>

        <label>
          <span>Github Username</span>
          <input type="text" name="username" id="username" />
          {errors.username && (
            <p className="error-message">
              <MdInfoOutline /> {errors.username}
            </p>
          )}
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

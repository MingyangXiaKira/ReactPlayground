import React, { useState } from "react";
// form element : action = "url" method="POST"
// label element: htmlFor = "id"
// input element: type id name = ""
// button element: type="submit"
// 1. set the state to store the form data and onChange event handler
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonFormData = JSON.stringify(formData);
    const compareData = JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    console.log(jsonFormData);
    console.log(compareData);
    fetch("https://www.greatfrontend.com/api/questions/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: compareData,
    })
      .then((response) => {
        console.log(response.text().then((text) => alert(text)));
      })
      .catch((error) => {
        console.log(error.text().then((text) => alert(text)));
      });
  };
  console.log(formData);
  return (
    <div className="formContainer">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 m-auto border-blue-300 border-2 p-4 flex flex-col gap-10"
      >
        <div className="nameConatainer flex flex-col">
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            className="border"
            type="text"
            onChange={handleChange}
            value={formData.name}
          ></input>
        </div>
        <div className="emailContainer flex flex-col">
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            className="border"
            type="text"
            onChange={handleChange}
            value={formData.email}
          ></input>
        </div>
        <div className="messageContainer flex flex-col">
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            className="border"
            rows={10}
            onChange={handleChange}
            value={formData.message}
          />
        </div>
        <div className="buttonContainer">
          <button
            type="submit"
            className="border px-4 py-2 bg-blue-300 text-white hover:bg-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

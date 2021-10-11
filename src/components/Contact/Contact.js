import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formData }),
    })
      .then(() => {
        alert("Success!");
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="contact u-margin-top-medium">
      <div className="contact__heading">
        <h2 className="heading-secondary">Contact</h2>
      </div>

      <div className="contact__container u-margin-top-medium">
        <form className="contact__form" onSubmit={handleSubmit} netlify>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />

          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>

          <button className="contact__button btn btn--primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

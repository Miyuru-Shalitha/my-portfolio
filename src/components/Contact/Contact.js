import React, { useState } from "react";

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...formData }),
  //   })
  //     .then(() => {
  //       alert("Success!");
  //     })
  //     .catch((error) => alert(error));
  // };

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
        <form
          className="contact__form"
          // onSubmit={handleSubmit}
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            required
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter message"
            onChange={handleChange}
            value={formData.message}
            required
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

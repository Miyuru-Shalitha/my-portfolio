import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact u-margin-top-medium">
      <div className="contact__heading">
        <h2 className="heading-secondary">Contact</h2>
      </div>

      <div className="contact__container u-margin-top-medium">
        <form
          className="contact__form"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input id="name" name="name" type="text" placeholder="Name" />

          <input id="email" name="email" type="email" placeholder="Email" />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter message"
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

import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">

      <h1>
        Contact Us
      </h1>

      <div className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button>
          Send Message
        </button>

      </div>

    </div>
  );
};

export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required!");
      return;
    }

    setError("");
    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Your Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;


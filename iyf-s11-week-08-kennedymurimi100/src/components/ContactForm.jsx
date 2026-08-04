import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />

      <br /><br />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />

      <br /><br />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />

      <br /><br />

      <button type="submit">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
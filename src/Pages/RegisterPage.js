import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", formData);
      alert("Registration Successful!");
    } catch (error) {
      alert("Error during registration");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "50px auto", maxWidth: "400px" }}>
      <input name="name" type="text" placeholder="Name" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const [isLoading, setIsLoading] = useState(false); // For showing a loading state

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setIsLoading(true); // Set loading state to true

    // Basic validation
    if (!credentials.email || !credentials.password) {
      setErrorMessage("Both email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", credentials);
      localStorage.setItem("token", response.data.token); // Save token to local storage
      alert("Login Successful!");
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login Failed");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        style={styles.input}
        required
      />
      {errorMessage && <p style={styles.error}>{errorMessage}</p>} {/* Display error messages */}
      <button type="submit" style={styles.button} disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

const styles = {
  form: {
    margin: "50px auto",
    maxWidth: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: "10px 0",
    textAlign: "center",
  },
};

export default LoginPage;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#333", color: "#fff" }}>
    <Link to="/" style={{ color: "white", textDecoration: "none" }}>ShopEase</Link>
    <div>
      <Link to="/register" style={{ color: "white", margin: "0 10px" }}>Register</Link>
      <Link to="/login" style={{ color: "white", margin: "0 10px" }}>Login</Link>
    </div>
  </nav>
);

export default Navbar;

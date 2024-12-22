import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/login" style={styles.navLink}>Login</Link>
          <Link to="/register" style={styles.navLink}>Register</Link>
          <Link to="/products" style={styles.navLink}>Products</Link>
          <Link to="/cart" style={styles.navLink}>Cart</Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div style={styles.home}>
                <h1 style={styles.title}>"Shopping made simple and delightful!"</h1>
                <p style={styles.subtitle}>
                  Discover the best deals on our amazing products!
                </p>
                <div style={styles.featured}>
                  <h2>Featured Products</h2>
                  <div style={styles.productGrid}>
                    {/* Product cards with actual images */}
                    <div style={styles.productCard}>
                      <img
                        src="/Picture/images1.jpg" 
                        alt="Product 1"
                        style={styles.productImage}
                      />
                      <p>Product 1</p>
                    </div>
                    <div style={styles.productCard}>
                      <img
                        src="/Picture/images2.jpg" 
                        alt="Product 2"
                        style={styles.productImage}
                      />
                      <p>Product 2</p>
                    </div>
                    <div style={styles.productCard}>
                      <img
                        src="/Picture/images3.jpg"
                        alt="Product 3"
                        style={styles.productImage}
                      />
                      <p>Product 3</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Register Page */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Products Page */}
          <Route
            path="/products"
            element={
              <div style={styles.page}>
                <h2>Our Products</h2>
                <p>Browse and shop your favorite items here!</p>
                <div style={styles.productGrid}>
                  {/* Dynamic product cards */}
                  <div style={styles.productCard}>
                    <img
                      src="/Picture/images2.jpg"
                      alt="Product 1"
                      style={styles.productImage}
                    />
                    <p>Product 1</p>
                  </div>
                  <div style={styles.productCard}>
                    <img
                      src="/Picture/images2.jpg"
                      alt="Product 2"
                      style={styles.productImage}
                    />
                    <p>Product 2</p>
                  </div>
                  <div style={styles.productCard}>
                    <img
                      src="/Picture/images3.jpg"
                      alt="Product 3"
                      style={styles.productImage}
                    />
                    <p>Product 3</p>
                  </div>
                </div>
              </div>
            }
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={
              <div style={styles.page}>
                <h2>Your Cart</h2>
                <p>Manage your selected items here!</p>
              </div>
            }
          />
        </Routes>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; 2024 eCommerce Store. All rights reserved.</p>
          <p>
            Follow us on <a href="#!" style={styles.footerLink}>Facebook</a> |{" "}
            <a href="#!" style={styles.footerLink}>Twitter</a> |{" "}
            <a href="#!" style={styles.footerLink}>Instagram</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#007BFF",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  home: {
    textAlign: "center",
    margin: "50px auto",
    maxWidth: "800px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#007BFF",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
  },
  featured: {
    marginTop: "20px",
    padding: "10px",
    borderTop: "1px solid #ccc",
  },
  page: {
    textAlign: "center",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  productCard: {
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    borderRadius: "8px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#007BFF",
    color: "white",
    marginTop: "30px",
  },
  footerLink: {
    color: "white",
    textDecoration: "underline",
  },
};

export default App;

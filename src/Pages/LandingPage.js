import React from "react";

const LandingPage = () => (
  <div>
    <header style={{ textAlign: "center", padding: "50px 0" }}>
      <h1>Welcome to ShopEase</h1>
      <p>Your one-stop shop for everything!</p>
      <button>Shop Now</button>
    </header>
    <section>
      <h2>Featured Products</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {/* Example Product Cards */}
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>Product 1</div>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>Product 2</div>
      </div>
    </section>
    <footer style={{ textAlign: "center", marginTop: "50px" }}>
      <p>© 2024 ShopEase. All rights reserved.</p>
    </footer>
  </div>
);

export default LandingPage;

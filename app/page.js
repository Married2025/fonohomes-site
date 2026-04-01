"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleSearchClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = async () => {
    // 🔥 SEND EMAIL TO FREE API
    await fetch("https://formspree.io/f/mayvlkvd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    // 🔴 YOUR MLS LINK
    window.location.href = "PASTE YOUR ONEHOME LINK HERE";
  };

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", fontFamily: "Arial" }}>

      {/* HERO */}
      <section style={{
        height: "90vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div>
          <h1 style={{ fontSize: "64px" }}>Cameron Fono</h1>
          <p style={{ opacity: 0.8 }}>
            Orange County Real Estate, Elevated.
          </p>

          <button onClick={handleSearchClick}
            style={{
              marginTop: "20px",
              padding: "14px 28px",
              background: "#fff",
              color: "#000",
              border: "none"
            }}>
            Search Homes
          </button>
        </div>
      </section>

<section style={{
  padding: "80px 20px",
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  flexWrap: "wrap"
}}>
  <img
    src="https://i.postimg.cc/N0m4cvrG/headshot.jpg"
    style={{ width: "280px", borderRadius: "16px" }}
  />

  <div style={{ maxWidth: "500px" }}>
    <h2>Meet Cameron</h2>
    <p style={{ opacity: 0.8 }}>
      Orange County native specializing in luxury real estate.
      Strategic marketing. Strong negotiation. Proven results.
    </p>
  </div>
</section>
      {/* POPUP */}
      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            background: "#111",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "center",
            width: "300px"
          }}>
            <h2>Access All Listings</h2>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px"
              }}
            />

            <button onClick={handleSubmit}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                background: "#fff",
                color: "#000",
                border: "none"
              }}>
              View Homes
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

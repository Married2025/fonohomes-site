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
    window.location.href = "https://portal.onehome.com/en-US/share/2612211U90323";
  };

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", fontFamily: "Arial" }}>

<section style={{
  position: "relative",
  height: "95vh",
  backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}}>

  {/* DARK LUXURY OVERLAY */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6))"
  }} />

  <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
    
    <h1 style={{
      fontSize: "72px",
      color: "#fff",
      fontWeight: "500",
      letterSpacing: "2px"
    }}>
      Cameron Fono
    </h1>

    <p style={{
      color: "#ccc",
      marginTop: "10px",
      letterSpacing: "1px"
    }}>
      ORANGE COUNTY REAL ESTATE
    </p>

    <div style={{ marginTop: "30px" }}>
    <button onClick={handleSearchClick}
  style={{
    marginRight: "12px",
    padding: "14px 36px",
    background: "#fff",
    color: "#000",
    border: "none",
    fontWeight: "400",
    letterSpacing: "2px"
  }}>
  VIEW OUR LISTINGS
</button>

      <button style={{
        padding: "14px 32px",
        background: "transparent",
        color: "#fff",
        border: "1px solid #aaa",
        letterSpacing: "1px"
      }}>
        GET HOME VALUE
      </button>
    </div>

  </div>
</section>
<section style={{
  background: "#0a0a0a",
  color: "#fff",
  padding: "80px 20px",
  textAlign: "center"
}}>
  <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
    Elevated Real Estate Experience
  </h2>

  <p style={{ color: "#aaa", maxWidth: "600px", margin: "0 auto" }}>
    Representing buyers and sellers across Orange County with a focus on luxury, strategy, and results.
  </p>
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
  <div
    onClick={() => setShowPopup(false)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "#111",
        padding: "40px",
        borderRadius: "10px",
        textAlign: "center",
        width: "300px",
        position: "relative"
      }}
    >

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowPopup(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "12px",
          background: "transparent",
          color: "#aaa",
          border: "none",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        ×
      </button>

      <h2>Access Our Listings</h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px"
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "10px",
          background: "#fff",
          color: "#000",
          border: "none"
        }}
      >
        View Listings
      </button>

    </div>
  </div>

    </main>
  );
}

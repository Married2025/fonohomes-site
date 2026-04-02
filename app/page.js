"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSellerPopup, setShowSellerPopup] = useState(false);

  const [email, setEmail] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleBuyerSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("type", "buyer");
      formData.append("email", email);

      await fetch("https://hooks.zapier.com/hooks/catch/26970318/unccakj/", {
        method: "POST",
        body: formData,
      });

      window.location.href =
        "https://portal.onehome.com/en-US/share/2612211U90323";
    } catch {
      alert("Something went wrong.");
    }
  };

  const handleSellerSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("type", "seller");
      formData.append("email", sellerEmail);
      formData.append("phone", phone);
      formData.append("address", address);

      await fetch("https://hooks.zapier.com/hooks/catch/26970318/unccakj/", {
        method: "POST",
        body: formData,
      });

      alert("We received your info.");
      setShowSellerPopup(false);
    } catch {
      alert("Something went wrong.");
    }
  };

  return (
    <main style={{ background: "#f8f6f2", color: "#1a1a1a", fontFamily: "Helvetica Neue, sans-serif" }}>
      
      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div>
          <h1 style={{ fontSize: "80px", fontWeight: "300" }}>Cameron Fono</h1>
          <p style={{ letterSpacing: "3px", color: "#8c7a5b" }}>
            ORANGE COUNTY REAL ESTATE
          </p>

          <div style={{ marginTop: "30px" }}>
            <button onClick={() => setShowPopup(true)} style={{ marginRight: "15px" }}>
              VIEW LISTINGS
            </button>

            <button onClick={() => setShowSellerPopup(true)}>
              GET HOME VALUE
            </button>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section style={{
        padding: "120px 20px",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          maxWidth: "1100px",
          display: "flex",
          gap: "80px",
          alignItems: "center",
          flexWrap: "wrap"
        }}>

          {/* 🔥 SHARP HEADSHOT */}
          <div style={{
            width: "380px",
            height: "500px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.12)"
          }}>
            <img
              src="https://res.cloudinary.com/dujnu0pgr/image/upload/f_auto,q_auto:best,w_800/headshot_tckbah"
              alt="Cameron Fono"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%"
              }}
            />
          </div>

          {/* BIO TEXT */}
          <div style={{ maxWidth: "500px" }}>
            <h2 style={{ fontSize: "42px", fontWeight: "300" }}>
              Coastal Real Estate, Elevated
            </h2>

            <p style={{ color: "#555", lineHeight: "1.9" }}>
              Cameron Fono delivers a refined, client-focused real estate
              experience across Orange County’s most desirable coastal
              communities.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

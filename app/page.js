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
      alert("Something went wrong. Please try again.");
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

      alert("We received your info. We'll reach out shortly.");
      setShowSellerPopup(false);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main
      style={{
        background: "#f8f6f2",
        color: "#1a1a1a",
        fontFamily: "Helvetica Neue, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.75))",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "300",
              letterSpacing: "1px",
            }}
          >
            Cameron Fono
          </h1>

          <p
            style={{
              marginTop: "10px",
              letterSpacing: "3px",
              color: "#8c7a5b",
            }}
          >
            ORANGE COUNTY REAL ESTATE
          </p>

          <div style={{ marginTop: "40px" }}>
            <button
              onClick={() => setShowPopup(true)}
              style={{
                marginRight: "15px",
                padding: "14px 36px",
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              VIEW LISTINGS
            </button>

            <button
              onClick={() => setShowSellerPopup(true)}
              style={{
                padding: "14px 36px",
                background: "transparent",
                color: "#1a1a1a",
                border: "1px solid #1a1a1a",
                cursor: "pointer",
              }}
            >
              GET HOME VALUE
            </button>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section
        style={{
          padding: "120px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            display: "flex",
            gap: "80px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* HEADSHOT (FIXED SHARPNESS) */}
          <div
            style={{
              width: "380px",
              height: "500px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
              position: "relative",
            }}
          >
            <img
              src="https://raw.githubusercontent.com/Married2025/fonohomes-site/refs/heads/main/headshot.jpg"
              alt="Cameron Fono"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.12), rgba(0,0,0,0))",
              }}
            />
          </div>

          {/* BIO TEXT */}
          <div style={{ maxWidth: "500px" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "300",
                marginBottom: "20px",
              }}
            >
              Coastal Real Estate, Elevated
            </h2>

            <p style={{ color: "#555", lineHeight: "1.9" }}>
              Cameron Fono delivers a refined, client-focused real estate
              experience across Orange County’s most desirable coastal
              communities. With a modern approach to marketing and a deep
              understanding of local market trends, every transaction is handled
              with precision and care.
            </p>

            <p style={{ color: "#555", marginTop: "20px", lineHeight: "1.9" }}>
              From ocean-view properties to investment opportunities, Cameron
              provides strategic guidance designed to help clients move
              confidently and maximize results.
            </p>
          </div>
        </div>
      </section>

      {/* BUYER POPUP */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "30px",
              width: "320px",
              borderRadius: "8px",
            }}
          >
            <h3>Access Listings</h3>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />

            <button
              onClick={handleBuyerSubmit}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
              }}
            >
              View Homes
            </button>
          </div>
        </div>
      )}

      {/* SELLER POPUP */}
      {showSellerPopup && (
        <div
          onClick={() => setShowSellerPopup(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "30px",
              width: "320px",
              borderRadius: "8px",
            }}
          >
            <h3>Get Your Home Value</h3>

            <input
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
              placeholder="Email"
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />

            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Property Address"
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />

            <button
              onClick={handleSellerSubmit}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                background: "#1a1a1a",
                color: "#fff",
                border: "none",
              }}
            >
              Get My Home Value
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

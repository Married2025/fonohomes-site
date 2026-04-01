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
      await fetch("https://hooks.zapier.com/hooks/catch/26970318/unccakj/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "buyer",
          email: email
        })
      });

      window.location.href =
        "https://portal.onehome.com/en-US/share/2612211U90323";
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSellerSubmit = async () => {
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/26970318/unccakj/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "seller",
          email: sellerEmail,
          phone: phone,
          address: address
        })
      });

      alert("We received your info. We'll reach out shortly.");
      setShowSellerPopup(false);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", fontFamily: "Arial" }}>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "95vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6))"
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "72px", letterSpacing: "2px" }}>
            Cameron Fono
          </h1>

          <p style={{ color: "#ccc" }}>
            ORANGE COUNTY REAL ESTATE
          </p>

          <div style={{ marginTop: "30px" }}>
            <button
              onClick={() => setShowPopup(true)}
              style={{
                marginRight: "12px",
                padding: "14px 36px",
                background: "#fff",
                color: "#000",
                border: "none"
              }}
            >
              VIEW OUR LISTINGS
            </button>

            <button
              onClick={() => setShowSellerPopup(true)}
              style={{
                padding: "14px 36px",
                background: "transparent",
                color: "#fff",
                border: "1px solid #aaa"
              }}
            >
              GET HOME VALUE
            </button>
          </div>
        </div>
      </section>

      {/* BUYER POPUP */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
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
              width: "320px",
              position: "relative"
            }}
          >
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

            <h2>Access Listings</h2>

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
                background: "#fff",
                color: "#000",
                border: "none"
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
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
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
              width: "320px",
              position: "relative"
            }}
          >
            <button
              onClick={() => setShowSellerPopup(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "12px",
                background: "transparent",
                color: "#aaa",
                border: "none",
                fontSize: "20px"
              }}
            >
              ×
            </button>

            <h2>Get Your Home Value</h2>

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
                background: "#fff",
                color: "#000",
                border: "none"
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

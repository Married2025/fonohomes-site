"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSeller, setShowSeller] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/26970318/unccakj/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "buyer",
          email
        })
      });

      window.location.href = "https://portal.onehome.com/en-US/share/2612211U90323";
    } catch (err) {
      alert("Something went wrong. Try again.");
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
          address,
          email,
          phone
        })
      });

      alert("Home value request received. I'll text you shortly.");
      setShowSeller(false);
    } catch (err) {
      alert("Submission failed. Try again.");
    }
  };

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", fontFamily: "Arial" }}>

      {/* HERO */}
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

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6))"
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "72px" }}>Cameron Fono</h1>
          <p style={{ color: "#ccc" }}>ORANGE COUNTY REAL ESTATE</p>

          <div style={{ marginTop: "30px" }}>
            <button onClick={() => setShowPopup(true)}
              style={{ padding: "14px 32px", marginRight: "10px" }}>
              VIEW OUR LISTINGS
            </button>

            <button onClick={() => setShowSeller(true)}
              style={{ padding: "14px 32px", border: "1px solid #fff", background: "transparent", color: "#fff" }}>
              GET HOME VALUE
            </button>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "50px",
        flexWrap: "wrap"
      }}>
        <img src="https://i.postimg.cc/N0m4cvrG/headshot.jpg" style={{ width: "280px", borderRadius: "16px" }} />
        <div style={{ maxWidth: "500px" }}>
          <h2>Meet Cameron</h2>
          <p style={{ opacity: 0.8 }}>
            Orange County native specializing in luxury real estate.
          </p>
        </div>
      </section>

      {/* BUYER POPUP */}
      {showPopup && (
        <div onClick={() => setShowPopup(false)} style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#111", padding: "40px", position: "relative" }}>
            <button onClick={() => setShowPopup(false)} style={{ position: "absolute", top: 10, right: 10 }}>×</button>
            <h2>Access Our Listings</h2>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleSubmit}>View Listings</button>
          </div>
        </div>
      )}

      {/* SELLER POPUP */}
      {showSeller && (
        <div onClick={() => setShowSeller(false)} style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#111", padding: "40px", position: "relative" }}>
            <button onClick={() => setShowSeller(false)} style={{ position: "absolute", top: 10, right: 10 }}>×</button>

            <h2>Get Your Home Value</h2>

            <input placeholder="Property Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Phone (for instant value)" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <button onClick={handleSellerSubmit}>
              Get My Home Value
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

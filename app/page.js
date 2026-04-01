"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSellerPopup, setShowSellerPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const ZAPIER_WEBHOOK = "https://hooks.zapier.com/hooks/catch/26970318/unccakj/";

  const handleSubmit = async () => {
    if (!email) return alert("Please enter your email");

    try {
      setLoading(true);

      await fetch(ZAPIER_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          type: "buyer"
        })
      });

      setShowPopup(false);
      window.location.href = "https://portal.onehome.com/en-US/share/2612211U90323";
    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSellerSubmit = async () => {
    if (!email || !address) {
      return alert("Please enter both address and email");
    }

    try {
      setLoading(true);

      await fetch(ZAPIER_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          address,
          type: "seller"
        })
      });

      setShowSellerPopup(false);
      alert("Success! We'll text you shortly.");
    } catch (err) {
      alert("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", fontFamily: "Arial" }}>

      {/* HERO */}
      <section style={hero}>
        <div style={overlay} />
        <div style={{ position: "relative" }}>
          <h1 style={{ fontSize: "72px" }}>Cameron Fono</h1>
          <p style={{ color: "#ccc" }}>ORANGE COUNTY REAL ESTATE</p>

          <div style={{ marginTop: "30px" }}>
            <button onClick={() => setShowPopup(true)} style={btnPrimary}>
              VIEW OUR LISTINGS
            </button>

            <button onClick={() => setShowSellerPopup(true)} style={btnSecondary}>
              GET YOUR HOME VALUE
            </button>
          </div>
        </div>
      </section>

      {/* SELLER SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Discover What Your Home Is Worth</h2>
        <p style={{ color: "#aaa" }}>
          Get a custom valuation based on real market data.
        </p>

        <button onClick={() => setShowSellerPopup(true)} style={btnPrimary}>
          GET INSTANT HOME VALUE
        </button>
      </section>

      {/* BUYER POPUP */}
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <h2>Private Listings Access</h2>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={input}
          />

          <button onClick={handleSubmit} style={btnFull}>
            {loading ? "Loading..." : "View Listings"}
          </button>
        </Popup>
      )}

      {/* SELLER POPUP */}
      {showSellerPopup && (
        <Popup onClose={() => setShowSellerPopup(false)}>
          <h2>What’s Your Home Worth?</h2>

          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Property Address"
            style={input}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={input}
          />

          <button onClick={handleSellerSubmit} style={btnFull}>
            {loading ? "Submitting..." : "Get My Home Value"}
          </button>
        </Popup>
      )}

    </main>
  );
}

/* COMPONENT */
function Popup({ children, onClose }) {
  return (
    <div onClick={onClose} style={overlay}>
      <div onClick={(e) => e.stopPropagation()} style={popup}>
        <button onClick={onClose} style={close}>×</button>
        {children}
      </div>
    </div>
  );
}

/* STYLES */

const hero = {
  position: "relative",
  height: "95vh",
  backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.75)"
};

const popup = {
  background: "#111",
  padding: "40px",
  borderRadius: "12px",
  textAlign: "center",
  width: "320px",
  position: "relative"
};

const close = {
  position: "absolute",
  top: "10px",
  right: "12px",
  background: "transparent",
  color: "#aaa",
  border: "none",
  fontSize: "20px",
  cursor: "pointer"
};

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  border: "none"
};

const btnPrimary = {
  marginRight: "12px",
  padding: "14px 36px",
  background: "#fff",
  color: "#000",
  border: "none"
};

const btnSecondary = {
  padding: "14px 32px",
  background: "transparent",
  color: "#fff",
  border: "1px solid #aaa"
};

const btnFull = {
  marginTop: "15px",
  width: "100%",
  padding: "12px",
  background: "#fff",
  color: "#000",
  border: "none"
};

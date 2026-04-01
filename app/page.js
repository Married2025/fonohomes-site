"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSeller, setShowSeller] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const sendLead = async (data) => {
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/26970318/unccakj/", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!email) return alert("Enter your email");

    await sendLead({
      type: "buyer",
      email,
    });

    window.location.href =
      "https://portal.onehome.com/en-US/share/2612211U90323";
  };

  const handleSellerSubmit = async () => {
    if (!email || !address) {
      return alert("Enter address and email");
    }

    await sendLead({
      type: "seller",
      address,
      email,
      phone,
    });

    alert("Got it — I’ll text you shortly.");
    setShowSeller(false);
  };

  return (
    <main style={{ background: "#0a0a0a", color: "#fff" }}>

      {/* HERO */}
      <section style={hero}>
        <div style={overlay} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "72px" }}>Cameron Fono</h1>
          <p style={{ color: "#ccc" }}>ORANGE COUNTY REAL ESTATE</p>

          <div style={{ marginTop: "30px" }}>
            <button onClick={() => setShowPopup(true)} style={btnPrimary}>
              VIEW OUR LISTINGS
            </button>

            <button onClick={() => setShowSeller(true)} style={btnSecondary}>
              GET HOME VALUE
            </button>
          </div>
        </div>
      </section>

      {/* BUYER POPUP */}
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <h2>Private Listings Access</h2>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />

          <button onClick={handleSubmit} style={btnFull}>
            View Listings
          </button>
        </Popup>
      )}

      {/* SELLER POPUP */}
      {showSeller && (
        <Popup onClose={() => setShowSeller(false)}>
          <h2>Get Your Home Value</h2>

          <input
            placeholder="Property Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={input}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />

          <input
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={input}
          />

          <button onClick={handleSellerSubmit} style={btnFull}>
            Get My Home Value
          </button>
        </Popup>
      )}

    </main>
  );
}

/* POPUP */
function Popup({ children, onClose }) {
  return (
    <div style={overlayFull} onClick={onClose}>
      <div style={popup} onClick={(e) => e.stopPropagation()}>
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
  backgroundImage:
    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.75)",
};

const overlayFull = {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.85)",
  zIndex: 9999,
};

const popup = {
  background: "#111",
  padding: "40px",
  borderRadius: "12px",
  width: "320px",
  textAlign: "center",
  position: "relative",
};

const close = {
  position: "absolute",
  top: "10px",
  right: "12px",
  background: "none",
  border: "none",
  color: "#aaa",
  fontSize: "20px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
};

const btnPrimary = {
  padding: "14px 36px",
  marginRight: "12px",
  background: "#fff",
  color: "#000",
};

const btnSecondary = {
  padding: "14px 32px",
  background: "transparent",
  border: "1px solid #fff",
  color: "#fff",
};

const btnFull = {
  marginTop: "15px",
  width: "100%",
  padding: "12px",
  background: "#fff",
  color: "#000",
};

"use client";
import { useState, useEffect } from "react";

export default function Home() {
const [showForm, setShowForm] = useState(false);
const [isMobile, setIsMobile] = useState(false);
const [formData, setFormData] = useState({
name: "",
phone: "",
email: "",
address: "",
});

useEffect(() => {
const handleResize = () => {
setIsMobile(window.innerWidth < 900);
};
handleResize();
window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
}, []);

const handleSubmit = async (e) => {
e.preventDefault();

```
await fetch("PASTE_YOUR_ZAPIER_WEBHOOK_URL_HERE", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});

alert("Request submitted!");
setShowForm(false);

setFormData({
  name: "",
  phone: "",
  email: "",
  address: "",
});
```

};

return (
<main
style={{
fontFamily: "Playfair Display, serif",
background: "#f5f3ef",
color: "#111",
}}
> <link
     href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&display=swap"
     rel="stylesheet"
   />

```
  {/* NAVBAR */}
  <nav
    style={{
      position: "fixed",
      top: 0,
      width: "100%",
      padding: isMobile ? "15px 20px" : "20px 60px",
      display: "flex",
      justifyContent: "space-between",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)",
      zIndex: 1000,
    }}
  >
    <div style={{ color: "#fff" }}>Cameron Fono</div>
  </nav>

  {/* HERO */}
  <section style={{ height: "100vh", position: "relative" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/hb-pier.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(4px)",
      }}
    />

    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
      }}
    />

    <div
      style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: isMobile ? "center" : "left",
        gap: "40px",
        padding: "20px",
      }}
    >
      <img
        src="https://res.cloudinary.com/dujnu0pgr/image/upload/f_auto,q_auto,w_900/new_headshot_no_background_yzlkph"
        style={{
          width: isMobile ? "250px" : "420px",
          filter: "drop-shadow(0 80px 160px rgba(0,0,0,0.7))",
        }}
      />

      <div style={{ color: "#fff", maxWidth: "500px" }}>
        <p style={{ letterSpacing: "4px", fontSize: "12px", color: "#c6a87d" }}>
          ORANGE COUNTY REAL ESTATE
        </p>

        <h1 style={{ fontSize: isMobile ? "48px" : "90px", fontWeight: "300" }}>
          Cameron Fono
        </h1>

        <p style={{ marginTop: "20px", color: "#ddd" }}>
          A refined approach to buying and selling in Orange County.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          
          <a href="/listings" style={buttonStyleGold}>
            View Listings
          </a>

          <button onClick={() => setShowForm(true)} style={buttonStyleWhite}>
            Home Valuation
          </button>

        </div>
      </div>
    </div>
  </section>

  {/* ABOUT */}
  <section style={{ padding: "160px 20px", textAlign: "center" }}>
    <h2 style={{ fontSize: "50px", fontWeight: "300" }}>Meet Cameron</h2>

    <div style={{ maxWidth: "700px", margin: "40px auto", lineHeight: "2", color: "#555" }}>
      <p>Born and raised in Orange County, Cameron brings a deep understanding of the local market.</p>
      <p>His background as a sponsored skateboarder shaped his discipline and resilience.</p>
      <p>He delivers a refined, results-driven experience built on communication and trust.</p>
    </div>
  </section>

  {/* TESTIMONIALS */}
  <section style={{ padding: "140px 40px", background: "#fff" }}>
    <h2 style={{ textAlign: "center", fontSize: "42px", fontWeight: "300" }}>
      Client Experiences
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      marginTop: "60px"
    }}>
      {[
        "Cameron made the entire home selling process seamless and stress-free.",
        "Cameron helped me find a long-term home that checked every box.",
        "He handled every step efficiently and communicated clearly.",
        "Patient, highly competent, and someone you can rely on.",
        "Professionalism and dedication stood out from the beginning.",
        "One of the best decisions I made choosing Cameron."
      ].map((text, i) => (
        <div key={i} style={{
          padding: "30px",
          background: "#f5f3ef",
          borderRadius: "12px"
        }}>
          <p>“{text}”</p>
        </div>
      ))}
    </div>
  </section>

  {/* FOOTER */}
  <footer style={{
    background: "#111",
    color: "#fff",
    padding: "100px 20px",
    textAlign: "center"
  }}>
    <h2 style={{ fontSize: "40px", fontWeight: "300" }}>Cameron Fono</h2>
    <p style={{ marginTop: "10px", color: "#aaa" }}>Seacliff Team</p>

    <div style={{ marginTop: "30px", lineHeight: "2" }}>
      <p>📞 714-251-4244</p>
      <p>✉️ cameron@fonohomes.com</p>
      <p>DRE# 02206167</p>
      <p>19440 Goldenwest St. Huntington Beach, CA</p>
    </div>
  </footer>

  {/* FORM */}
  {showForm && (
    <div style={modalStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Home Valuation</h2>

        <input placeholder="Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
        <input placeholder="Phone" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
        <input placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
        <input placeholder="Address" required onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
      </form>
    </div>
  )}
</main>
```

);
}

const buttonStyleGold = {
padding: "14px 30px",
border: "1px solid #c6a87d",
color: "#fff",
textDecoration: "none",
};

const buttonStyleWhite = {
padding: "14px 30px",
border: "1px solid #fff",
background: "transparent",
color: "#fff",
cursor: "pointer",
};

const modalStyle = {
position: "fixed",
inset: 0,
background: "rgba(0,0,0,0.8)",
display: "flex",
alignItems: "center",
justifyContent: "center",
zIndex: 2000,
};

const formStyle = {
background: "#fff",
padding: "30px",
display: "flex",
flexDirection: "column",
gap: "10px",
width: "300px",
};

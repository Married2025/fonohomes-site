"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleSearchClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = async () => {
    await fetch("https://formspree.io/f/mayvlkvd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    setShowPopup(false);

    window.location.href = "https://portal.onehome.com/en-US/share/2612211U90323";
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

        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
          <h1 style={{
            fontSize: "72px",
            letterSpacing: "2px",
            fontWeight: "500"
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
            <button
              onClick={handleSearchClick}
              style={{
                marginRight: "12px",
                padding: "14px 36px",
                background: "#fff",
                color: "#000",
                border: "none",
                letterSpacing: "2px"
              }}
            >
              VIEW OUR LISTINGS
            </button>

            <button
              style={{
                padding: "14px 32px",
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

      {/* VALUE SECTION */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px" }}>
          Elevated Real Estate Experience
        </h2>

        <p style={{
          color: "#aaa",
          maxWidth: "600px",
          margin: "20px auto"
        }}>
          Representing buyers and sellers across Orange County with a focus on luxury, strategy, and results.
        </p>
      </section>

      {/* BIO */}
      <section style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "50px",
        flexWrap: "wrap"
      }}>
        <img
          src="https://i.postimg.cc/N0m4cvrG/headshot.jpg"
          style={{
            width: "260px",
            borderRadius: "12px"
          }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h2>Meet Cameron</h2>

          <p style={{ color: "#aaa" }}>
            Orange County real estate specialist delivering a refined, strategic approach to buying and selling luxury homes.
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
            background: "rgba(0,0,0,0.85)",
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
              borderRadius: "12px",
              textAlign: "center",
              width: "320px",
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

            <h2>Private Listings Access</h2>

            <p style={{ color: "#aaa", fontSize: "14px" }}>
              Enter your email to view all available homes.
            </p>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
                border: "none"
              }}
            />

            <button
              onClick={handleSubmit}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "12px",
                background: "#fff",
                color: "#000",
                border: "none"
              }}
            >
              View Listings
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

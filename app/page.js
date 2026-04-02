"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main style={{ fontFamily: "Helvetica Neue, sans-serif", background: "#f8f6f2", color: "#1a1a1a" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        zIndex: 1000
      }}>
        <div style={{ fontWeight: "600" }}>Cameron Fono</div>
        <div style={{ display: "flex", gap: "30px" }}>
          <span style={{ cursor: "pointer" }}>Listings</span>
          <span style={{ cursor: "pointer" }}>About</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "80px"
      }}>
        <div>
          <h1 style={{ fontSize: "90px", fontWeight: "300", letterSpacing: "2px" }}>
            Cameron Fono
          </h1>

          <p style={{ letterSpacing: "4px", color: "#8c7a5b" }}>
            ORANGE COUNTY REAL ESTATE
          </p>

          <button
            onClick={() => setShowPopup(true)}
            style={{
              marginTop: "40px",
              padding: "16px 40px",
              background: "#1a1a1a",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            VIEW LISTINGS
          </button>
        </div>
      </section>

      {/* BIO */}
      <section style={{
        padding: "140px 20px",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          maxWidth: "1200px",
          display: "flex",
          gap: "100px",
          alignItems: "center",
          flexWrap: "wrap"
        }}>

          <img
            src="https://res.cloudinary.com/dujnu0pgr/image/upload/f_auto,q_auto:best,w_800/headshot_tckbah"
            alt="Cameron Fono"
            style={{
              width: "420px",
              height: "520px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.1)"
            }}
          />

          <div style={{ maxWidth: "520px" }}>
            <h2 style={{ fontSize: "48px", fontWeight: "300" }}>
              Meet Cameron
            </h2>

            <p style={{ marginTop: "20px", lineHeight: "1.9", color: "#555" }}>
              Meet Cameron, your dedicated real estate agent with a deep understanding of the local market.
              Born and raised in Orange County, Cameron knows the area inside and out.
            </p>

            <p style={{ marginTop: "20px", lineHeight: "1.9", color: "#555" }}>
              His background as a sponsored skateboarder instilled a no-quit, determined mindset that drives his success in real estate.
              With a reputation for 5-star reviews, Cameron offers expert guidance and personalized service.
            </p>

            <p style={{ marginTop: "20px", lineHeight: "1.9", color: "#555" }}>
              Whether you're a first-time buyer or seasoned investor, you can trust Cameron to deliver exceptional results every step of the way.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section style={{
        padding: "120px 40px",
        background: "#ffffff"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "300",
          marginBottom: "60px"
        }}>
          Featured Properties
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}>

          {["Newport Beach", "Huntington Beach", "Laguna Beach"].map((city, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)"
            }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <h3>{city}</h3>
                <p style={{ color: "#777" }}>$2,000,000+</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              width: "320px"
            }}
          >
            <h3>Access Listings</h3>
            <input
              placeholder="Email"
              style={{
                marginTop: "15px",
                padding: "10px",
                width: "100%"
              }}
            />
            <button style={{
              marginTop: "15px",
              width: "100%",
              padding: "10px",
              background: "#1a1a1a",
              color: "#fff",
              border: "none"
            }}>
              Continue
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

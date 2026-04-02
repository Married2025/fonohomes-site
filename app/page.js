"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main
      style={{
        fontFamily: "Playfair Display, serif",
        background: "#f5f3ef",
        color: "#111",
      }}
    >
      {/* GOOGLE FONT */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
        }}
      >
        <div style={{ color: "#fff", fontWeight: "400" }}>
          Cameron Fono
        </div>

        <div
          style={{
            display: "flex",
            gap: "40px",
            color: "#fff",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <span>Listings</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hb-pier.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px) scale(1.05)",
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* IMAGE */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
                filter: "blur(60px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            />

            <img
              src="/headshot.png"
              style={{
                width: "420px",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 80px 160px rgba(0,0,0,0.7))",
                transform: "translateY(40px)",
                position: "relative",
                zIndex: 2,
              }}
            />
          </div>

          {/* TEXT */}
          <div style={{ color: "#fff", maxWidth: "520px" }}>
            <p
              style={{
                letterSpacing: "6px",
                fontSize: "12px",
                marginBottom: "20px",
                color: "#d6c3a3",
                textTransform: "uppercase",
              }}
            >
              Orange County Real Estate
            </p>

            <h1
              style={{
                fontSize: "100px",
                fontWeight: "300",
                lineHeight: "1.05",
              }}
            >
              Cameron Fono
            </h1>

            <p
              style={{
                marginTop: "25px",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#eaeaea",
              }}
            >
              A refined approach to buying and selling in Orange County — built
              on precision, communication, and results.
            </p>

            <div style={{ marginTop: "50px" }}>
              <button
                style={{
                  padding: "16px 36px",
                  border: "1px solid #c6a87d",
                  background: "transparent",
                  color: "#fff",
                  letterSpacing: "2px",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                View Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "180px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "700px", textAlign: "center" }}>
          <h2 style={{ fontSize: "54px", fontWeight: "300" }}>
            Meet Cameron
          </h2>

          <p style={{ marginTop: "40px", lineHeight: "2", color: "#555" }}>
            Born and raised in Orange County, Cameron brings a deep
            understanding of the local market and a relentless commitment to his
            clients.
          </p>

          <p style={{ marginTop: "20px", lineHeight: "2", color: "#555" }}>
            His background as a sponsored skateboarder shaped his discipline,
            resilience, and ability to perform under pressure — qualities that
            now define his approach to real estate.
          </p>

          <p style={{ marginTop: "20px", lineHeight: "2", color: "#555" }}>
            Whether representing buyers or sellers, Cameron delivers a refined,
            results-driven experience built on communication, strategy, and
            trust.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          padding: "160px 40px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "48px", fontWeight: "300" }}>
          Client Experiences
        </h2>

        <div
          style={{
            marginTop: "80px",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          <p style={{ fontSize: "22px", lineHeight: "1.8", color: "#333" }}>
            “Cameron made the entire home selling process seamless and
            stress-free. His communication, professionalism, and market
            knowledge were exceptional.”
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "#fff",
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: "300", fontSize: "42px" }}>
          Cameron Fono
        </h2>

        <p style={{ marginTop: "10px", color: "#aaa" }}>Seacliff Team</p>

        <div style={{ marginTop: "40px", lineHeight: "2" }}>
          <p>📞 714-251-4244</p>
          <p>✉️ cameron@fonohomes.com</p>
          <p>DRE# 02206167</p>

          <p style={{ marginTop: "10px" }}>
            19440 Goldenwest St.
            <br />
            Huntington Beach, CA 92648
          </p>
        </div>
      </footer>
    </main>
  );
}

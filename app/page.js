"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      style={{
        fontFamily: "Playfair Display, serif",
        background: "#f5f3ef",
        color: "#111",
      }}
    >
      {/* FONT */}
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
          padding: isMobile ? "15px 20px" : "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
        }}
      >
        <div style={{ color: "#fff" }}>Cameron Fono</div>

        {!isMobile && (
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
        )}
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
              "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
          }}
        />

        {/* CONTENT */}
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
            padding: isMobile ? "0 20px" : "0 80px",
            gap: isMobile ? "30px" : "80px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* IMAGE */}
          <img
            src="https://res.cloudinary.com/dujnu0pgr/image/upload/f_auto,q_auto,w_900/new_headshot_no_background_yzlkph"
            style={{
              width: isMobile ? "260px" : "420px",
              height: "auto",
              filter: "drop-shadow(0 80px 160px rgba(0,0,0,0.7))",
              transform: isMobile ? "none" : "translateY(40px)",
            }}
          />

          {/* TEXT */}
          <div style={{ color: "#fff", maxWidth: "520px" }}>
            <p
              style={{
                letterSpacing: "4px",
                fontSize: "11px",
                marginBottom: "15px",
                color: "#d6c3a3",
                textTransform: "uppercase",
              }}
            >
              Orange County Real Estate
            </p>

            <h1
              style={{
                fontSize: isMobile ? "48px" : "100px",
                fontWeight: "300",
                lineHeight: "1.1",
              }}
            >
              Cameron Fono
            </h1>

            <p
              style={{
                marginTop: "20px",
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#eaeaea",
              }}
            >
              A refined approach to buying and selling in Orange County — built
              on precision, communication, and results.
            </p>

            {/* CTA */}
            <div style={{ marginTop: "30px" }}>
              <a
                href="https://agent.onehome.com/en-US/properties/map?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMSIsInNldGlkIjoiNzk4ODY0MyIsInNldGtleSI6Ijg2MSIsInVtYWlsIjoiY2FtZXJvbkBmb25vaG9tZXMuY29tIiwicmVzb3VyY2VpZCI6MCwiYWdlbnRpZCI6MjE4MDY2MiwiaXNkZWx0YSI6ZmFsc2UsIlZpZXdNb2RlIjoiMiIsInNvdXJjZSI6Ik1hdHJpeFVJIn0%3D&SMS=0&searchId=a89a6711-b69c-3895-862b-95cae49861aa&group=eyJhbGciOiJIUzI1NiJ9.eyJhZ2VudElkIjoiMjE4MDY2MiIsImdyb3VwSWQiOiIzY2ZmODY3MS0xODcwLTNlOTgtYjk0OS0yOGRjNTAxYTUzZDQifQ.HULSlqClfXtj9BxIFZIM_QiKa2kpg3XMDUB_jVZVr80"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 28px",
                  border: "1px solid #c6a87d",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                View Listings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: isMobile ? "120px 20px" : "180px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: isMobile ? "36px" : "54px", fontWeight: "300" }}>
          Meet Cameron
        </h2>

        <div style={{ maxWidth: "700px", margin: "40px auto 0" }}>
          <p style={{ lineHeight: "2", color: "#555" }}>
            Born and raised in Orange County, Cameron brings a deep
            understanding of the local market and a relentless commitment to his
            clients.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "#fff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: "300", fontSize: "36px" }}>
          Cameron Fono
        </h2>

        <p style={{ marginTop: "20px", color: "#aaa" }}>
          cameron@fonohomes.com
        </p>
      </footer>
    </main>
  );
}

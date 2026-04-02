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
          <span>Listings</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO - YOUR HB PIER IMAGE */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('/hb-pier.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "80px",
        position: "relative"
      }}>

        {/* DARK OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)"
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "90px", fontWeight: "300", color: "#fff" }}>
            Cameron Fono
          </h1>
          <p style={{ letterSpacing: "4px", color: "#eaeaea" }}>
            ORANGE COUNTY REAL ESTATE
          </p>
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
              His background as a sponsored skateboarder instilled a relentless, no-quit mindset that drives his success in real estate.
              With a reputation built on 5-star experiences, Cameron provides expert guidance and personalized service every step of the way.
            </p>

            <p style={{ marginTop: "20px", lineHeight: "1.9", color: "#555" }}>
              Whether you're a first-time buyer or a seasoned investor, Cameron is committed to delivering exceptional results with precision, communication, and care.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{
        padding: "120px 40px",
        background: "#ffffff"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "300",
          marginBottom: "60px"
        }}>
          Client Experiences
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>

          {[
            { text: "Cameron made the entire home selling process seamless and stress-free. His communication, professionalism, and market knowledge were exceptional." },
            { text: "Cameron helped me find a long-term home that checked every box. His dedication and communication made the process incredibly smooth." },
            { text: "When searching for a home, especially in Huntington Beach, Cameron is the agent to call. He handled every step efficiently and communicated clearly throughout." },
            { text: "We were in a difficult situation and Cameron made himself available immediately. He is patient, highly competent, and someone you can rely on." },
            { text: "Cameron’s professionalism and dedication stood out from the beginning. His market knowledge and commitment are unmatched." },
            { text: "Choosing Cameron was one of the best decisions I made. He goes above and beyond and was there every step of the way." }
          ].map((review, i) => (
            <div key={i} style={{
              padding: "30px",
              background: "#f8f6f2",
              borderRadius: "12px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.05)"
            }}>
              <p style={{ lineHeight: "1.8", color: "#555" }}>
                “{review.text}”
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "#fff",
        padding: "100px 40px",
        textAlign: "center"
      }}>

        <h2 style={{ fontWeight: "300", fontSize: "40px" }}>
          Cameron Fono
        </h2>

        <p style={{ marginTop: "10px", color: "#aaa" }}>
          Seacliff Team
        </p>

        <div style={{ marginTop: "40px", lineHeight: "2" }}>
          <p>
            📞 <a href="tel:17142514244" style={{ color: "#fff", textDecoration: "none" }}>
              714-251-4244
            </a>
          </p>

          <p>
            ✉️ <a href="mailto:cameron@fonohomes.com" style={{ color: "#fff", textDecoration: "none" }}>
              cameron@fonohomes.com
            </a>
          </p>

          <p>DRE# 02206167</p>

          <p style={{ marginTop: "10px" }}>
            19440 Goldenwest St.<br />
            Huntington Beach, CA 92648
          </p>
        </div>

        <div style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap"
        }}>
          <a href="https://www.facebook.com/cameron.fono" target="_blank" style={{ color: "#fff" }}>Facebook</a>
          <a href="https://www.instagram.com/cameronfonohomes/" target="_blank" style={{ color: "#fff" }}>Instagram</a>
          <a href="https://www.tiktok.com/@cameronfono" target="_blank" style={{ color: "#fff" }}>TikTok</a>
          <a href="https://www.linkedin.com/in/cameron-fono-5b0615267/" target="_blank" style={{ color: "#fff" }}>LinkedIn</a>
        </div>

        <p style={{ marginTop: "50px", color: "#666", fontSize: "14px" }}>
          © {new Date().getFullYear()} Cameron Fono. All rights reserved.
        </p>

      </footer>

    </main>
  );
}

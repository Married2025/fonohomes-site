<section
  style={{
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* BACKGROUND IMAGE */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/hb-pier.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(4px) scale(1.05)",
      transform: "scale(1.05)",
    }}
  />

  {/* DARK OVERLAY */}
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
    {/* LEFT SIDE - HEADSHOT */}
    <div style={{ position: "relative" }}>
      
      {/* GLOW BEHIND IMAGE */}
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
        src="/headshot.png" // use your cut-out file path
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

    {/* RIGHT SIDE - TEXT */}
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
          fontFamily: "Playfair Display, serif",
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
        A refined approach to buying and selling in Orange County — built on precision, communication, and results.
      </p>

      {/* CTA */}
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

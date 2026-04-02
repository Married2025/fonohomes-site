<section
  style={{
    height: "100vh",
    backgroundImage: "url('/hb-pier.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "80px",
    position: "relative",
  }}
>

  {/* DARK GRADIENT OVERLAY (adds depth) */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)",
    }}
  />

  {/* CONTENT */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      gap: "80px",
      maxWidth: "1200px",
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: "60px",
      flexWrap: "wrap",
    }}
  >

    {/* HEADSHOT (slightly bigger + elevated) */}
    <img
      src="https://res.cloudinary.com/dujnu0pgr/image/upload/f_auto,q_auto:best,w_800/headshot_tckbah"
      style={{
        width: "360px",
        height: "450px",
        objectFit: "cover",
        borderRadius: "14px",
        boxShadow: "0 60px 140px rgba(0,0,0,0.5)",
        transform: "translateY(20px)",
      }}
    />

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
          fontSize: "92px",
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
          maxWidth: "420px",
        }}
      >
        A refined approach to buying and selling in Orange County — built on precision, communication, and results.
      </p>

      {/* CTA BUTTON */}
      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            padding: "14px 32px",
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

  {/* SUBTLE BOTTOM FADE (luxury touch) */}
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "120px",
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
    }}
  />
</section>

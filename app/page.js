<main style={{ background: "#0b0b0c", color: "#eaeaea", fontFamily: "Helvetica Neue, sans-serif" }}>

  {/* HERO */}
  <section
    style={{
      position: "relative",
      height: "100vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75))"
      }}
    />

    <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
      <h1
        style={{
          fontSize: "90px",
          fontWeight: "300",
          letterSpacing: "2px"
        }}
      >
        Cameron Fono
      </h1>

      <p
        style={{
          color: "#bfa46f",
          marginTop: "10px",
          letterSpacing: "3px"
        }}
      >
        ORANGE COUNTY REAL ESTATE
      </p>

      <div style={{ marginTop: "50px" }}>
        <button
          onClick={() => setShowPopup(true)}
          style={{
            marginRight: "15px",
            padding: "16px 40px",
            background: "#bfa46f",
            color: "#000",
            border: "none",
            fontWeight: "500",
            letterSpacing: "1px",
            cursor: "pointer"
          }}
        >
          VIEW LISTINGS
        </button>

        <button
          onClick={() => setShowSellerPopup(true)}
          style={{
            padding: "16px 40px",
            background: "transparent",
            color: "#eaeaea",
            border: "1px solid #bfa46f",
            letterSpacing: "1px",
            cursor: "pointer"
          }}
        >
          GET HOME VALUE
        </button>
      </div>
    </div>
  </section>

  {/* BIO SECTION */}
  <section
    style={{
      padding: "120px 20px",
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        maxWidth: "1100px",
        display: "flex",
        gap: "60px",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      {/* HEADSHOT */}
      <img
        src="/your-headshot.jpg" // 🔥 replace with your image
        alt="Cameron Fono"
        style={{
          width: "350px",
          height: "450px",
          objectFit: "cover",
          borderRadius: "6px"
        }}
      />

      {/* BIO TEXT */}
      <div style={{ maxWidth: "500px" }}>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "300",
            marginBottom: "20px"
          }}
        >
          Elevated Real Estate Experience
        </h2>

        <p style={{ color: "#aaa", lineHeight: "1.8" }}>
          Cameron Fono specializes in delivering a refined, client-first real
          estate experience across Orange County. With a focus on strategic
          marketing, strong negotiation, and elevated presentation, Cameron
          helps buyers and sellers achieve exceptional results in every market.
        </p>

        <p style={{ color: "#aaa", marginTop: "20px", lineHeight: "1.8" }}>
          Whether you're searching for your next home or maximizing your
          property's value, every detail is handled with precision and care.
        </p>
      </div>
    </div>
  </section>

<main style={{ background: "#f8f6f2", color: "#1a1a1a", fontFamily: "Helvetica Neue, sans-serif" }}>

  {/* HERO */}
  <section
    style={{
      position: "relative",
      height: "100vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')",
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
          "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.75))"
      }}
    />

    <div style={{ position: "relative", zIndex: 2 }}>
      <h1
        style={{
          fontSize: "80px",
          fontWeight: "300",
          letterSpacing: "1px"
        }}
      >
        Cameron Fono
      </h1>

      <p
        style={{
          marginTop: "10px",
          letterSpacing: "3px",
          color: "#8c7a5b"
        }}
      >
        ORANGE COUNTY REAL ESTATE
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => setShowPopup(true)}
          style={{
            marginRight: "15px",
            padding: "14px 36px",
            background: "#1a1a1a",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          VIEW LISTINGS
        </button>

        <button
          onClick={() => setShowSellerPopup(true)}
          style={{
            padding: "14px 36px",
            background: "transparent",
            color: "#1a1a1a",
            border: "1px solid #1a1a1a",
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
        gap: "80px",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      {/* HEADSHOT */}
      <img
        src="/headshot.jpg"
        alt="Cameron Fono"
        style={{
          width: "380px",
          height: "500px",
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
        }}
      />

      {/* BIO TEXT */}
      <div style={{ maxWidth: "500px" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "300",
            marginBottom: "20px"
          }}
        >
          Coastal Real Estate, Elevated
        </h2>

        <p style={{ color: "#555", lineHeight: "1.9" }}>
          Cameron Fono delivers a refined, client-focused real estate experience
          across Orange County’s most desirable coastal communities. With a
          modern approach to marketing and a deep understanding of local market
          trends, every transaction is handled with precision and care.
        </p>

        <p style={{ color: "#555", marginTop: "20px", lineHeight: "1.9" }}>
          From ocean-view properties to investment opportunities, Cameron
          provides strategic guidance designed to help clients move confidently
          and maximize results.
        </p>
      </div>
    </div>
  </section>

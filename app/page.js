export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0a0a0a", color: "#fff" }}>

      {/* HERO */}
      <section style={{
        height: "90vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div>
          <h1 style={{ fontSize: "64px" }}>Cameron Fono</h1>
          <p style={{ opacity: 0.8 }}>
            Orange County Real Estate, Elevated.
          </p>

          <button style={{
            marginTop: "20px",
            padding: "14px 28px",
            background: "#fff",
            color: "#000",
            border: "none"
          }}>
            Search Homes
          </button>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ padding: "80px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Featured Listings</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>
          {[1,2,3].map((item) => (
            <div key={item} style={{
              width: "300px",
              background: "#111",
              borderRadius: "10px",
              overflow: "hidden"
            }}>
              <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e"
                style={{ width: "100%" }} />
              <div style={{ padding: "15px" }}>
                <h3>$1,250,000</h3>
                <p style={{ opacity: 0.7 }}>
                  Huntington Beach
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "50px",
        flexWrap: "wrap"
      }}>
        <img
          src="https://i.postimg.cc/N0m4cvrG/headshot.jpg"
          style={{ width: "280px", borderRadius: "16px" }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h2>Meet Cameron</h2>
          <p style={{ opacity: 0.8 }}>
            Orange County native specializing in luxury real estate.
            Strategic marketing. Strong negotiation. Proven results.
          </p>
        </div>
      </section>

    </main>
  );
}

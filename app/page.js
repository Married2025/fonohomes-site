export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", color: "#111" }}>

      {/* HERO */}
      <section style={{
        height: "90vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center"
      }}>
        <div>
          <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
            Cameron Fono
          </h1>
          <p style={{ fontSize: "20px" }}>
            Orange County Real Estate, Elevated.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        flexWrap: "wrap"
      }}>
        
        <img
          src="https://i.postimg.cc/N0m4cvrG/headshot.jpg"
          alt="Cameron"
          style={{
            width: "300px",
            borderRadius: "16px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
          }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h2>Meet Cameron</h2>
          <p style={{ lineHeight: "1.6" }}>
            Born and raised in Orange County, Cameron Fono specializes in luxury real estate
            with a modern, results-driven approach. Known for strong negotiation and
            high-level marketing, he helps clients win in competitive markets.
          </p>

          <button style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}>
            Contact Cameron
          </button>
        </div>

      </section>

    </main>
  );
}

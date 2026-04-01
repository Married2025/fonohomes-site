export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", color: "#111" }}>

      {/* HERO */}
      <section style={{
        height: "80vh",
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
          <h1 style={{ fontSize: "60px" }}>Fono Homes</h1>
          <p>Luxury Real Estate in Orange County</p>
        </div>
      </section>

      {/* AGENT SECTION */}
      <section style={{
        padding: "60px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap"
      }}>
        
        <img 
          src="https://via.placeholder.com/300"
          alt="Agent"
          style={{ width: "300px", borderRadius: "12px" }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h2>Meet Cameron</h2>
          <p>
            Born and raised in Orange County, Cameron specializes in luxury real estate,
            helping clients buy and sell with confidence. Known for 5-star service and
            a relentless work ethic, he delivers results.
          </p>
        </div>

      </section>

    </main>
  );
}

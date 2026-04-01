export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", color: "#111" }}>
      
      {/* HERO SECTION */}
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
          <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
            Fono Homes
          </h1>
          <p style={{ fontSize: "20px" }}>
            Luxury Real Estate in Orange County
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Find Your Dream Home</h2>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          We specialize in luxury homes, coastal properties, and high-end investments across Orange County.
        </p>
      </section>

    </main>
  );
}

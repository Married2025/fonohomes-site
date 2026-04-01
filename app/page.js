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
          <h1 style={{ fontSize: "60px" }}>Cameron Fono</h1>
          <p>Orange County Real Estate, Elevated.</p>

          <div style={{ marginTop: "20px" }}>
            <button style={{ marginRight: "10px", padding: "12px 20px" }}>
              Search Homes
            </button>
            <button style={{ padding: "12px 20px" }}>
              Get Home Value
            </button>
          </div>
        </div>
      </section>

      {/* HOME SEARCH */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Find Your Next Home</h2>

        <input placeholder="City, Address, ZIP"
          style={{ padding: "12px", width: "300px", marginTop: "20px" }} />

        <div style={{ marginTop: "20px" }}>
          <button style={{ padding: "12px 24px" }}>Search</button>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Featured Listings</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "30px",
          flexWrap: "wrap"
        }}>
          {[1,2,3].map((item) => (
            <div key={item} style={{
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden"
            }}>
              <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e"
                style={{ width: "100%" }} />
              <div style={{ padding: "15px" }}>
                <h3>$1,250,000</h3>
                <p>3 Bed • 2 Bath • Huntington Beach</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Explore Orange County</h2>

        <div style={{ marginTop: "20px" }}>
          {["Huntington Beach", "Newport Beach", "Costa Mesa", "Garden Grove"].map((city) => (
            <button key={city} style={{ margin: "10px", padding: "10px 20px" }}>
              {city}
            </button>
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
          style={{ width: "300px", borderRadius: "16px" }}
        />

        <div style={{ maxWidth: "500px" }}>
          <h2>Meet Cameron</h2>
          <p>
            Orange County native specializing in luxury real estate.
            Strategic marketing. Strong negotiation. Proven results.
          </p>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section style={{
        padding: "60px 20px",
        background: "#000",
        color: "#fff",
        textAlign: "center"
      }}>
        <h2>Find Out What Your Home Is Worth</h2>

        <input placeholder="Enter your address"
          style={{ padding: "12px", width: "300px", marginTop: "20px" }} />

        <div style={{ marginTop: "20px" }}>
          <button style={{ padding: "12px 24px" }}>
            Get Value
          </button>
        </div>
      </section>

    </main>
  );
}

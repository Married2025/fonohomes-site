"use client";
import { useState } from "react";

export default function Home() {
return (
<main
style={{
fontFamily: "Playfair Display, serif",
background: "#f5f3ef",
color: "#111",
}}
> <link
     href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&display=swap"
     rel="stylesheet"
   />

```
  <nav
    style={{
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "20px 60px",
      display: "flex",
      justifyContent: "space-between",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)",
      zIndex: 1000,
    }}
  >
    <div style={{ color: "#fff" }}>Cameron Fono</div>
  </nav>

  <section
    style={{
      height: "100vh",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/hb-pier.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(4px)",
      }}
    />

    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
      }}
    />

    <div
      style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src="https://res.cloudinary.com/dujnu0pgr/image/upload/f_auto,q_auto,w_900/new_headshot_no_background_yzlkph"
        style={{
          width: "300px",
          filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
        }}
      />

      <h1
        style={{
          color: "#fff",
          fontSize: "60px",
          fontWeight: "300",
          marginTop: "20px",
        }}
      >
        Cameron Fono
      </h1>

      <a
        href="/listings"
        style={{
          marginTop: "30px",
          padding: "14px 30px",
          border: "1px solid #c6a87d",
          color: "#fff",
          textDecoration: "none",
          letterSpacing: "2px",
          fontSize: "12px",
        }}
      >
        View Listings
      </a>
    </div>
  </section>
</main>
```

);
}

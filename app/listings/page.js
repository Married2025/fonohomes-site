"use client";
import { useEffect } from "react";

export default function Listings() {
useEffect(() => {
setTimeout(() => {
window.location.href =
"https://agent.onehome.com/en-US/properties/map?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMSIsInNldGlkIjoiNzk4ODY0MyIsInNldGtleSI6Ijg2MSIsImVtYWlsIjoiY2FtZXJvbkBmb25vaG9tZXMuY29tIiwicmVzb3VyY2VpZCI6MCwiYWdlbnRpZCI6MjE4MDY2MiwiaXNkZWx0YSI6ZmFsc2UsIlZpZXdNb2RlIjoiMiIsInNvdXJjZSI6Ik1hdHJpeFVJIn0%3D";
}, 1500);
}, []);

return (
<main
style={{
height: "100vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
background: "#111",
color: "#fff",
textAlign: "center",
}}
> <div>
<h1 style={{ fontWeight: "300" }}>Cameron Fono</h1>
<p style={{ marginTop: "10px", color: "#c6a87d" }}>
Loading Listings... </p> </div> </main>
);
}

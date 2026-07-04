"use client";

import { useState } from "react";

export default function Home() {
  const tiers = [
    { name: "Low", price: "$600", note: "Starter tower" },
    { name: "Mid", price: "$1,200", note: "1080p ultra" },
    { name: "High", price: "$2,200", note: "High-refresh 1440p" },
    { name: "Enthusiast", price: "$3,800", note: "Native 4K" },
    { name: "Extreme", price: "$6,500+", note: "No compromise" },
  ];

  // All 10 builds: shared (hidden) parts + black/white (visible) parts per tier
  // Real brand/model picks from current 2026 guides.
  const builds = [
    {
      shared: { cpu: "AMD Ryzen 5 5600", storage: "WD Black SN770 1TB", psu: "Corsair CX650 (650W Bronze)" },
      black: { gpu: "ASRock Arc B580 Challenger 12GB", mobo: "Gigabyte B550M DS3H", memory: "Corsair Vengeance RGB Pro 16GB DDR4-3600", cse: "Montech AIR 903 MAX (Black, ARGB fans)", cooler: "Stock Wraith Cooler" },
      white: { gpu: "ASRock Arc B580 Challenger 12GB", mobo: "Gigabyte B550M DS3H", memory: "Corsair Vengeance LPX White 16GB DDR4-3600 (no RGB)", cse: "Fractal Design Pop Air White (clean mesh)", cooler: "Stock Wraith Cooler" },
    },
    {
      shared: { cpu: "AMD Ryzen 5 9600X", storage: "Samsung 990 Pro 1TB", psu: "Corsair RM650e (650W Gold)" },
      black: { gpu: "Sapphire Pulse RX 9060 XT 16GB", mobo: "Gigabyte B850 Gaming X AX", memory: "G.Skill Trident Z5 RGB 32GB DDR5-6000 (Black)", cse: "Lian Li Lancool 207 (Black, ARGB)", cooler: "Cooler Master MasterLiquid 240 Atmos (RGB)" },
      white: { gpu: "ASUS Prime RX 9060 XT 16GB (White, clean)", mobo: "Gigabyte B850 Aorus Elite AX Ice (White)", memory: "Corsair Vengeance 32GB DDR5-6000 White (no RGB)", cse: "NZXT H5 Flow (White, minimal)", cooler: "NZXT Kraken 240 (White, clean)" },
    },
    {
      shared: { cpu: "AMD Ryzen 7 9800X3D", storage: "Samsung 990 Pro 2TB", psu: "Corsair RM850e (850W Gold)" },
      black: { gpu: "Sapphire Nitro+ RX 9070 XT 16GB (ARGB)", mobo: "MSI MAG B850 Tomahawk MAX WiFi", memory: "G.Skill Trident Z5 RGB 32GB DDR5-6000 (Black)", cse: "Lian Li Lancool 216 (Black, dual 160mm ARGB)", cooler: "Lian Li Galahad II LCD 280 (screen)" },
      white: { gpu: "ASRock RX 9070 XT Steel Legend (White, clean)", mobo: "ASUS ROG Strix B850-A (White)", memory: "Corsair Vengeance 32GB DDR5-6000 White (no RGB)", cse: "Fractal Design North Chalk White (wood + mesh)", cooler: "Arctic Liquid Freezer III 280 (White, no RGB)" },
    },
    {
      shared: { cpu: "AMD Ryzen 7 9800X3D", storage: "Samsung 990 Pro 2TB", psu: "Corsair RM1000e (1000W Platinum)" },
      black: { gpu: "ASUS ROG Astral RTX 5080 (quad-fan, ARGB)", mobo: "ASUS ROG Strix X670E-F", memory: "G.Skill Trident Z5 RGB 32GB DDR5-6400 (Black)", cse: "Lian Li O11 Dynamic EVO (Black, showcase glass)", cooler: "Lian Li Galahad II LCD 360 (screen)" },
      white: { gpu: "MSI RTX 5080 Gaming Trio (White, clean)", mobo: "ASUS ROG Strix X670E-A (White)", memory: "Corsair Dominator Titanium White 32GB DDR5-6400", cse: "NZXT H7 Flow (White, minimal)", cooler: "NZXT Kraken Elite 360 (White)" },
    },
    {
      shared: { cpu: "AMD Ryzen 9 9950X", storage: "Samsung 990 Pro 4TB", psu: "Corsair HX1200i (1200W Platinum)" },
      black: { gpu: "ASUS ROG Astral RTX 5090 (flagship, ARGB)", mobo: "ASUS ROG Crosshair X870E Hero", memory: "G.Skill Trident Z5 RGB 64GB DDR5-6000 (Black)", cse: "Lian Li O11 Dynamic EVO XL (Black, full showcase)", cooler: "Lian Li Galahad II LCD 360 (screen)" },
      white: { gpu: "ASUS ROG Astral RTX 5090 (White)", mobo: "ASUS ROG Strix X870E-A (White)", memory: "Corsair Dominator Titanium White 64GB DDR5-6000", cse: "Fractal Design North XL Chalk White (wood + mesh)", cooler: "Arctic Liquid Freezer III 360 (White, no RGB)" },
    },
  ];

  const [i, setI] = useState(1);
  const [finish, setFinish] = useState<"Black" | "White">("Black");
  const [view, setView] = useState<"select" | "build">("select");

  const tier = tiers[i];
  const b = builds[i];
  const v = finish === "Black" ? b.black : b.white;

  const parts = [
    { label: "Processor", name: b.shared.cpu },
    { label: "Graphics Card", name: v.gpu },
    { label: "Motherboard", name: v.mobo },
    { label: "Memory", name: v.memory },
    { label: "Storage", name: b.shared.storage },
    { label: "Power Supply", name: b.shared.psu },
    { label: "Case", name: v.cse },
    { label: "Cooling", name: v.cooler },
  ];

  const gold = "#C2A26A";
  const goldDeep = "#B8975C";
  const ink = "#2A2723";
  const sub = "#8A8278";
  const border = "#EDE4D2";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F3EC",
        color: ink,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 24px 80px",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade { animation: fadeUp 0.5s ease both; }
        .build-btn { transition: transform 0.2s ease, filter 0.2s ease; }
        .build-btn:hover { transform: translateY(-2px); filter: brightness(1.03); }
        .build-btn:active { transform: translateY(0); }
        .seg:hover { color: ${goldDeep}; }
        .glass-btn { transition: transform 0.2s ease; }
        .glass-btn:hover { transform: translateY(-1px); }
        .back:hover { color: ${ink}; }
      `}</style>

      {/* Brand wordmark */}
      <div className="fade" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "48px" }}>
        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "linear-gradient(135deg, #D8BE86, #B8975C)", boxShadow: "0 0 10px rgba(194,162,106,0.5)" }} />
        <span style={{ fontSize: "15px", letterSpacing: "0.42em", textTransform: "uppercase", fontWeight: 500, color: ink, paddingLeft: "2px" }}>pcbuilder</span>
      </div>

      {view === "select" && (
        <>
          <h1 className="fade" style={{ fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 600, textAlign: "center", lineHeight: 1.18, margin: "0 0 14px", maxWidth: "620px", letterSpacing: "-0.01em" }}>
            A complete PC, built around your budget.
          </h1>
          <p className="fade" style={{ fontSize: "16px", color: sub, textAlign: "center", margin: "0 0 48px", maxWidth: "460px", lineHeight: 1.5 }}>
            Set what you want to spend, choose your finish, and we handle the rest.
          </p>

          <div className="fade" style={{ width: "100%", maxWidth: "600px", background: "#FFFFFF", border: `1px solid ${border}`, borderRadius: "28px", padding: "38px 34px 34px", boxShadow: "0 24px 60px -30px rgba(120,100,60,0.28)" }}>
            {/* Budget label */}
            <div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: goldDeep, fontWeight: 600, marginBottom: "10px" }}>Your budget</div>

            {/* Big price */}
            <div style={{ fontSize: "44px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{tier.price}</div>
            <div style={{ fontSize: "15px", color: sub, marginBottom: "26px" }}>{tier.name} &middot; {tier.note}</div>

            {/* Long box split in 5, with sliding glass square */}
            <div style={{ position: "relative", display: "flex", background: "#FBF8F2", border: `1px solid ${border}`, borderRadius: "18px", padding: "6px", marginBottom: "30px" }}>
              {/* sliding glass square */}
              <div
                style={{
                  position: "absolute",
                  top: "6px",
                  bottom: "6px",
                  left: `calc(6px + (100% - 12px) * ${i / 5})`,
                  width: `calc((100% - 12px) / 5)`,
                  borderRadius: "13px",
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(194,162,106,0.75)",
                  boxShadow: "0 8px 20px -8px rgba(140,120,70,0.45), inset 0 1px 2px rgba(255,255,255,0.9)",
                  transition: "left 0.3s cubic-bezier(0.4,0,0.2,1)",
                  zIndex: 1,
                }}
              />
              {/* 5 segments with centered labels */}
              {tiers.map((t, idx) => (
                <button
                  key={t.name}
                  className="seg"
                  onClick={() => setI(idx)}
                  style={{
                    position: "relative",
                    zIndex: 2,
                    flex: 1,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "13px 4px",
                    fontSize: "clamp(11px, 2.1vw, 13px)",
                    fontWeight: idx === i ? 600 : 500,
                    color: idx === i ? goldDeep : "#B0A899",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    transition: "color 0.25s ease, font-weight 0.25s ease",
                  }}
                >
                  {t.name}
                </button>
              ))}
            </div>

            {/* Finish label */}
            <div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: goldDeep, fontWeight: 600, marginBottom: "13px" }}>Your finish</div>

            {/* Black / White buttons */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "30px" }}>
              {(["Black", "White"] as const).map((f) => {
                const active = finish === f;
                return (
                  <button key={f} className="glass-btn" onClick={() => setFinish(f)}
                    style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", padding: "14px", borderRadius: "16px", cursor: "pointer", background: active ? "rgba(216,190,134,0.10)" : "#FBF8F2", border: active ? `1.5px solid ${gold}` : `1.5px solid ${border}`, color: ink, fontSize: "15px", fontWeight: 500 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "6px", background: f === "Black" ? "#2A2723" : "#FFFFFF", border: f === "White" ? "1px solid #D8D2C6" : "1px solid #2A2723", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.15)" }} />
                      {f}
                    </span>
                    <span style={{ fontSize: "11px", color: active ? goldDeep : "#B6AE9F", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                      {f === "Black" ? "Maximal · RGB · Showcase" : "Minimal · Clean · Calm"}
                    </span>
                  </button>
                );
              })}
        </div>

            {/* Build button */}
            <button className="build-btn" onClick={() => setView("build")}
              style={{ width: "100%", padding: "17px", borderRadius: "999px", border: `1px solid ${goldDeep}`, background: "linear-gradient(180deg, #D8BE86 0%, #C2A26A 100%)", color: "#3A2E1A", fontSize: "15px", fontWeight: 600, letterSpacing: "0.03em", cursor: "pointer", boxShadow: "0 12px 26px -12px rgba(180,150,90,0.7)" }}>
              Build my PC
            </button>
          </div>

          <p style={{ fontSize: "12px", color: "#B6AE9F", marginTop: "26px", textAlign: "center", maxWidth: "420px", lineHeight: 1.5 }}>
            Every build is balanced for real performance. Prices update to the best current deal.
          </p>
        </>
      )}

      {view === "build" && (
        <div className="fade" style={{ width: "100%", maxWidth: "600px" }}>
          {/* Back */}
          <button className="back" onClick={() => setView("select")}
            style={{ background: "none", border: "none", cursor: "pointer", color: sub, fontSize: "14px", marginBottom: "20px", padding: 0, transition: "color 0.2s ease" }}>
            &larr; Change budget or finish
          </button>

          {/* Build header */}
          <div style={{ background: "#FFFFFF", border: `1px solid ${border}`, borderRadius: "28px", padding: "34px 34px 12px", boxShadow: "0 24px 60px -30px rgba(120,100,60,0.28)" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: goldDeep, fontWeight: 600, marginBottom: "8px" }}>
              {finish} &middot; {finish === "Black" ? "Maximal Build" : "Minimal Build"} &middot; Gaming Tower
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "4px" }}>
              <span style={{ fontSize: "40px", fontWeight: 600, letterSpacing: "-0.02em" }}>{tier.price}</span>
              <span style={{ fontSize: "14px", color: sub }}>{tier.name} &middot; {tier.note}</span>
            </div>
            <div style={{ fontSize: "13px", color: "#B6AE9F", marginBottom: "22px" }}>Estimated total &middot; live Amazon pricing being added</div>

            {/* Parts list */}
            <div>
              {parts.map((p, idx) => (
                <div key={p.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "16px 0", borderTop: idx === 0 ? "none" : `1px solid ${border}` }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: goldDeep, fontWeight: 600, marginBottom: "3px" }}>{p.label}</div>
                    <div style={{ fontSize: "15px", color: ink, fontWeight: 500, lineHeight: 1.35 }}>{p.name}</div>
                  </div>
                  <div style={{ fontSize: "14px", color: "#C6BEAF", fontWeight: 500, flexShrink: 0 }}>&mdash;</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: "12px", color: "#B6AE9F", marginTop: "22px", textAlign: "center", lineHeight: 1.5 }}>
            Balanced and compatibility-checked. Each part links to its best current price once live.
          </p>
        </div>
      )}
    </main>
  );
}
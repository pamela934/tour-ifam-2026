import { useState, useRef } from "react";
import bgImg from "./assets/bg.png";

function SplashScreen({ onEntrar }) {
  return (
    <div style={{
      width: "100vw", height: "100vh",
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover", backgroundPosition: "center",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
      <div style={{ position: "relative", zIndex: 2, width: "min(480px, 95vw)", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
        <div style={{ background: "linear-gradient(135deg, #1a5c2a 0%, #2d8a3e 55%, #6abf69 100%)", padding: "36px 28px 64px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: -40, left: -20, right: -20, height: 80, background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: 18, left: 18, opacity: 0.5 }}>
            {[0,1,2].map(r => (
              <div key={r} style={{ display: "flex", gap: "7px", marginBottom: "7px" }}>
                {[0,1,2,3].map(c => <div key={c} style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff" }} />)}
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", top: 14, right: 18 }}>
            {[0,1,2].map(r => (
              <div key={r} style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                {[0,1,2].map(c => <div key={c} style={{ width: 24, height: 24, borderRadius: "5px", background: r===0&&c===0 ? "#e74c3c" : "rgba(255,255,255,0.35)" }} />)}
              </div>
            ))}
          </div>
          <h1 style={{ color: "#fff", fontSize: "38px", fontWeight: 900, margin: "24px 0 0", lineHeight: 1.05 }}>TOUR<br />VIRTUAL 360°</h1>
          <p style={{ color: "#a8d8a8", fontSize: "16px", fontWeight: 600, margin: "10px 0 0" }}>Seja bem-vindo(a)!</p>
          <div style={{ width: 30, height: 3, background: "#6abf69", marginTop: 8, borderRadius: 2 }} />
        </div>
        <div style={{ padding: "0 20px", marginTop: "-20px", position: "relative", zIndex: 2 }}>
          <div style={{ background: "#fff", borderRadius: "14px", padding: "14px 18px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>📍</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 700, color: "#1a5c2a", fontSize: "14px" }}>Instituto Federal do Amazonas</p>
              <p style={{ margin: 0, color: "#888", fontSize: "13px" }}>Campus Manaus Zona Leste</p>
            </div>
            <div style={{ borderLeft: "1px solid #eee", paddingLeft: 14, fontSize: "26px", flexShrink: 0 }}>🏛️</div>
          </div>
        </div>
        <div style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>🖱️</div>
          <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: 1.5 }}>Clique e arraste para navegar<br />ou use o scroll do seu mouse para zoom.</p>
        </div>
        <div style={{ padding: "14px 20px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0f0f0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>
              {[0,1,2].map(r => (
                <div key={r} style={{ display: "flex", gap: "3px", marginBottom: "3px" }}>
                  {[0,1,2].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: "2px", background: r===0&&c===0 ? "#e74c3c" : "#2d8a3e" }} />)}
                </div>
              ))}
            </div>
            <div style={{ borderLeft: "2px solid #ccc", paddingLeft: 10 }}>
              <p style={{ margin: 0, fontWeight: 800, fontSize: "13px", color: "#222", lineHeight: 1.2 }}>INSTITUTO<br />FEDERAL</p>
              <p style={{ margin: 0, fontSize: "11px", color: "#555" }}>Amazonas</p>
              <p style={{ margin: 0, fontSize: "11px", color: "#2d8a3e", fontWeight: 600 }}>Campus Manaus Zona Leste</p>
            </div>
          </div>
          <button onClick={onEntrar} style={{ width: 42, height: 42, borderRadius: "50%", background: "#fff", border: "2px solid #1a5c2a", color: "#1a5c2a", fontSize: "22px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
        </div>
      </div>
    </div>
  );
}

const TOUR_BASE = "https://tour.panoee.net/695bf5bbd9acedda1b757040";
const CENA_INICIAL = "20260517_144128_493";

const grupos = [
  {
    id: "Entrada principal",
    nome: "Entrada principal",
    cenas: [
      { id: 1, nome: "LAB_LOVELACE", sceneId: "20260517_155443_286" },
      // Adicione mais cenas aqui depois
    ],
  },
  {
    id: "Centro Tecnológico",
    nome: "Centro Tecnológico",
    cenas: [
      // Adicione as cenas dos corredores aqui depois
    ],
  },
  {
  id: "Medicina veterinária",
    nome: "Medicina Veterinária",
    cenas: [
      { id: 1, nome: "LAB_LOVELACE", sceneId: "20260517_155443_286" },
      // Adicione mais cenas aqui depois
    ],
  },
  {
  id: "Agroecologia",
    nome: "Agroecologia",
    cenas: [
      { id: 1, nome: "LAB_LOVELACE", sceneId: "20260517_155443_286" },
      // Adicione mais cenas aqui depois
    ],
  },
  {
  id: "Agropecuária",
    nome: "Agropecuária",
    cenas: [
      { id: 1, nome: "LAB_LOVELACE", sceneId: "20260517_155443_286" },
      // Adicione mais cenas aqui depois
    ],
  },
  {
  id: "Área de esportes",
    nome: "Área de esportes",
    cenas: [
      { id: 1, nome: "LAB_LOVELACE", sceneId: "20260517_155443_286" },
      // Adicione mais cenas aqui depois
    ],
  },
];

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [splashVisivel, setSplashVisivel] = useState(true);
  const [cenaAtiva, setCenaAtiva] = useState(CENA_INICIAL);
  const [gruposAbertos, setGruposAbertos] = useState({ lab: true, corredores: false });

  const toggleGrupo = (id) => setGruposAbertos(prev => ({ ...prev, [id]: !prev[id] }));

  const irParaCena = (sceneId) => {
    setCenaAtiva(sceneId);
    setMenuAberto(false);
  };

  if (splashVisivel) return <SplashScreen onEntrar={() => setSplashVisivel(false)} />;

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>

      <iframe
        key={cenaAtiva}
        name="panoee-tour-embeded"
        src={`${TOUR_BASE}/${cenaAtiva}`}
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="vr; xr; accelerometer; gyroscope; autoplay;"
        allowFullScreen
      />

      <button
        onClick={() => setMenuAberto(!menuAberto)}
        style={{
          position: "fixed", top: 16, left: 16, zIndex: 200,
          width: 46, height: 46, borderRadius: 12,
          background: menuAberto ? "#2E7D32" : "#1a5c2a",
          border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 5,
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          transition: "background 0.2s",
        }}
      >
        {menuAberto
          ? <span style={{ color: "#fff", fontSize: 20, lineHeight: 1 }}>✕</span>
          : [0,1,2].map(i => (
              <div key={i} style={{ width: i === 1 ? 14 : 20, height: 2, background: "#fff", borderRadius: 2 }} />
            ))
        }
      </button>

      <div style={{
        position: "fixed", top: 0, left: 0, height: "100%", width: 260,
        background: "#fff", display: "flex", flexDirection: "column",
        zIndex: 199,
        boxShadow: menuAberto ? "6px 0 32px rgba(0,0,0,0.18)" : "none",
        transform: menuAberto ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ background: "linear-gradient(135deg, #1a5c2a, #388E3C)", padding: "80px 20px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div>
              {[0,1,2].map(r => (
                <div key={r} style={{ display: "flex", gap: "3px", marginBottom: "3px" }}>
                  {[0,1,2].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "2px", background: r===0&&c===0 ? "#e74c3c" : "rgba(255,255,255,0.6)" }} />)}
                </div>
              ))}
            </div>
            <div style={{ borderLeft: "2px solid rgba(255,255,255,0.3)", paddingLeft: 10 }}>
              <p style={{ margin: 0, fontWeight: 800, fontSize: 13, color: "#fff", lineHeight: 1.2 }}>INSTITUTO FEDERAL</p>
              <p style={{ margin: 0, fontSize: 11, color: "#a5d6a7", lineHeight: 1.3 }}>do Amazonas — Campus Manaus Zona Leste</p>
            </div>
          </div>
        </div>

        <div style={{ padding: "20px 16px", flex: 1, overflowY: "auto" }}>
          <p style={{ margin: "0 0 12px 4px", fontSize: 10, fontWeight: 700, color: "#5A5A5A", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Cenas disponíveis
          </p>

          {grupos.map(grupo => (
            <div key={grupo.id} style={{ marginBottom: 4 }}>
              <button
                onClick={() => toggleGrupo(grupo.id)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", background: "#F5F5F5", border: "none", borderRadius: 8,
                  padding: "9px 12px", cursor: "pointer",
                  marginBottom: gruposAbertos[grupo.id] ? 4 : 8,
                  transition: "background 0.18s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#E8F5E9"}
                onMouseLeave={e => e.currentTarget.style.background = "#F5F5F5"}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: "#1a5c2a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {grupo.nome}
                </span>
                <span style={{ fontSize: 11, color: "#1a5c2a", display: "inline-block", transition: "transform 0.2s", transform: gruposAbertos[grupo.id] ? "rotate(90deg)" : "rotate(0deg)" }}>
                  ›
                </span>
              </button>

              {gruposAbertos[grupo.id] && grupo.cenas.map(cena => {
                const ativo = cena.sceneId === cenaAtiva;
                return (
                  <button
                    key={cena.id}
                    onClick={() => irParaCena(cena.sceneId)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      width: "100%", background: ativo ? "#e8f5e9" : "transparent",
                      border: ativo ? "1.5px solid #4CAF50" : "1.5px solid transparent",
                      borderRadius: 8, padding: "9px 12px 9px 20px",
                      cursor: "pointer", textAlign: "left",
                      marginBottom: 3, transition: "all 0.18s",
                    }}
                    onMouseEnter={e => { if (!ativo) e.currentTarget.style.background = "#F5F5F5"; }}
                    onMouseLeave={e => { if (!ativo) e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ fontSize: 13, fontWeight: ativo ? 700 : 400, color: ativo ? "#1a5c2a" : "#333" }}>
                      {cena.nome}
                    </span>
                    {ativo && <span style={{ color: "#1a5c2a", fontSize: 16 }}>›</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{ padding: "14px 20px", borderTop: "1px solid #E0E0E0", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF50" }} />
          <span style={{ fontSize: 11, color: "#5A5A5A" }}>Tour Virtual 360° · IFAM CMZL</span>
        </div>
      </div>

      {menuAberto && (
        <div
          onClick={() => setMenuAberto(false)}
          style={{ position: "fixed", inset: 0, zIndex: 198, background: "rgba(0,0,0,0.25)" }}
        />
      )}
    </div>
  );
}
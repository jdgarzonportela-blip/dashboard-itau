import { useState, useMemo } from "react";
// 👇 IMPORTAMOS EL JSON AUTOMÁTICO DE GITHUB
import rawData from "./data/limites_diarios.json";

(() => {
  const l = document.createElement("link");
  l.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap";
  l.rel = "stylesheet";
  document.head.appendChild(l);
})();

const LOGO = "data:image/png;base64,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";

// 👇 ASIGNAMOS LOS DATOS CRUDOS QUE LLEGAN DEL BOT
const COLOMBIA_DATA = rawData.colombia || [];
const PANAMA_DATA   = rawData.panama   || [];

// Como Power Automate envía el riesgo como una lista plana,
// dejamos que React lo agrupe dinámicamente por país:
const RIESGO = {};
if (rawData.riesgo) {
  rawData.riesgo.forEach(row => {
    const p = String(row["País"]); // Asegúrate de que coincida con el nombre de la columna en tu Excel
    if (!RIESGO[p]) RIESGO[p] = [];
    RIESGO[p].push({
      linea:      row["Línea"]        || "",
      limite:     row["LímiteTotal"]  || 0,
      consumo:    row["ConsumoTotal"] || 0,
      disponible: row["Disponible"]   || 0,
    });
  });
}

const OR = "#FF6200", OR_D = "#cc4f00", OR_L = "#fff3ec";
const F  = { fontFamily: "'Nunito','Inter',sans-serif" };

const fmt = (n) => {
  if (n === null || n === undefined || isNaN(n)) return "—";
  const a = Math.abs(n);
  if (a >= 1e6) return (n/1e6).toLocaleString("es-CO",{minimumFractionDigits:2,maximumFractionDigits:2}) + " MM USD";
  if (a >= 1e3) return (n/1e3).toLocaleString("es-CO",{minimumFractionDigits:1,maximumFractionDigits:1}) + " K USD";
  return n.toLocaleString("es-CO",{minimumFractionDigits:2,maximumFractionDigits:2}) + " USD";
};

const PROD_MAP = {
  "Trade & Garantías": "4. Trade & Garantias",
  "Gestão de Caixa":   "2. Gestão de Caixa",
  "Derivativos":       "3. Derivativos",
  "Bonds":             "5. Bonds | Aplicações LP",
};
const PROD_MAP_PAN = {
  "Trade & Garantías": "4. Trade & Garantias",
  "Gestão de Caixa":   "2. Gestão de Caixa",
  "Bonds":             "5. Bonds | Aplicações LP",
};

function getAlertas(riesgoLines) {
  return riesgoLines
    .filter(l => l.limite > 0 && (l.consumo / l.limite) * 100 >= 80)
    .map(l => ({ ...l, pct: (l.consumo / l.limite) * 100 }))
    .sort((a, b) => b.pct - a.pct);
}

function getAllAlertas() {
  const out = [];
  Object.keys(RIESGO).forEach(pais => {
    getAlertas(RIESGO[pais]).forEach(a => out.push({ ...a, pais }));
  });
  return out.sort((a, b) => b.pct - a.pct);
}

const ALL_ALERTAS = getAllAlertas();

function Header({ title, onBack }) {
  return (
    <div style={{ background: OR, padding: "18px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", ...F }}>
      <div style={{ display:"flex", alignItems:"center", gap:16 }}>
        {onBack && (
          <button onClick={onBack} style={{ background:"rgba(255,255,255,0.2)", border:"none", borderRadius:8, color:"#fff", cursor:"pointer", fontSize:20, padding:"4px 14px", fontFamily:"inherit" }}>‹</button>
        )}
        <img src={LOGO} style={{ height:110, borderRadius:10 }} alt="Itaú" />
      </div>
      <div style={{ textAlign:"right" }}>
        <div style={{ fontSize:19, fontWeight:800, color:"#fff" }}>{title}</div>
        <div style={{ fontSize:11, color:"rgba(255,255,255,0.85)", marginTop:3 }}>Valores en USD · Corte 02 Jun 2026</div>
      </div>
    </div>
  );
}

function AlertaCard({ a, showPais }) {
  const ic  = a.pct >= 95;
  const bg  = ic ? "#fef2f2" : "#fffbeb";
  const bd  = ic ? "#dc2626" : "#f59e0b";
  const txt = ic ? "#dc2626" : "#b45309";
  const pw  = Math.min(100, a.pct);
  return (
    <div style={{ background:bg, borderLeft:`6px solid ${bd}`, borderRadius:10, padding:"16px 20px", marginBottom:12, ...F }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8 }}>
        <div>
          <div style={{ fontSize:12, fontWeight:800, color:txt, marginBottom:3 }}>
            {ic ? "🔴 CRÍTICO" : "🟡 ALERTA"}
            {showPais && <span style={{ background:"#e5e7eb", color:"#374151", borderRadius:5, padding:"1px 8px", fontSize:11, fontWeight:700, marginLeft:8 }}>País {a.pais}</span>}
          </div>
          <div style={{ fontSize:15, fontWeight:800, color:"#222" }}>{a.linea}</div>
        </div>
        <div style={{ textAlign:"right" }}>
          <div style={{ fontSize:28, fontWeight:900, color:txt }}>{a.pct.toFixed(1)}%</div>
          <div style={{ fontSize:10, color:"#888" }}>del límite consumido</div>
        </div>
      </div>
      <div style={{ marginTop:10, height:8, background: ic?"#fee2e2":"#fef3c7", borderRadius:4, overflow:"hidden" }}>
        <div style={{ height:8, background:bd, width:pw+"%", borderRadius:4 }} />
      </div>
      <div style={{ display:"flex", gap:20, marginTop:8, fontSize:12, color:"#555", flexWrap:"wrap" }}>
        <span>Límite: <b>{fmt(a.limite)}</b></span>
        <span>Consumo: <b style={{color:txt}}>{fmt(a.consumo)}</b></span>
        <span>Disponible: <b>{fmt(a.disponible)}</b></span>
      </div>
    </div>
  );
}

function Home({ onNavigate, country, setCountry }) {
  const criticos  = ALL_ALERTAS.filter(a => a.pct >= 95);
  const normales  = ALL_ALERTAS.filter(a => a.pct >= 80 && a.pct < 95);
  const paisesAf  = new Set(ALL_ALERTAS.map(a => a.pais)).size;
  const df        = country === "colombia" ? COLOMBIA_DATA : PANAMA_DATA;
  const flag      = country === "colombia" ? "🇨🇴" : "🇵🇦";
  const label     = country === "colombia" ? "Colombia" : "Panamá";
  const paisesN   = new Set(df.map(d => d.pais)).size;
  const triC      = criticos.length > 0 ? "#dc2626" : "#f59e0b";
  const alertBg   = criticos.length > 0 ? "#fef2f2" : "#fffbeb";
  const alertBd   = criticos.length > 0 ? "#dc2626" : "#f59e0b";

  return (
    <div style={{ ...F, background:"#f7f7f7", minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <Header title="Dashboard de Cupos Disponibles" />
      <div style={{ padding:"28px 32px", flex:1 }}>

        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ fontSize:12, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>Seleccionar base de consumo</div>
          <div style={{ display:"inline-flex", border:`2px solid ${OR}`, borderRadius:12, overflow:"hidden" }}>
            {[["colombia","🇨🇴 Colombia"],["panama","🇵🇦 Panamá"]].map(([k,v]) => (
              <button key={k} onClick={() => setCountry(k)}
                style={{ padding:"9px 28px", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit",
                  background: country===k ? OR : "#fff", color: country===k ? "#fff" : OR }}>{v}</button>
            ))}
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:28 }}>
          <div style={{ background:"#fff", border:`2px solid ${OR}`, borderRadius:20, padding:"38px 28px", textAlign:"center", boxShadow:"0 2px 12px rgba(255,98,0,0.1)", cursor:"pointer" }}
               onClick={() => onNavigate("busqueda")}>
            <div style={{ fontSize:50, marginBottom:14 }}>🔍</div>
            <div style={{ fontSize:21, fontWeight:800, color:"#222", marginBottom:8 }}>Búsqueda por ID</div>
            <div style={{ fontSize:14, color:"#888", lineHeight:1.6 }}>Consulta cupos disponibles y riesgo país por ID Solcred</div>
            <div style={{ marginTop:12, display:"inline-block", background:OR_L, borderRadius:20, padding:"4px 14px", fontSize:13, fontWeight:700, color:OR }}>{flag} Consumo Bcos {label}</div>
            <div style={{ marginTop:8, fontSize:13, fontWeight:700, color:OR }}>{df.length} registros disponibles →</div>
          </div>

          <div style={{ background:alertBg, border:`2px solid ${alertBd}`, borderRadius:20, padding:"38px 28px", textAlign:"center", boxShadow:"0 2px 12px rgba(0,0,0,0.08)", cursor:"pointer" }}
               onClick={() => onNavigate("alertas")}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:14 }}>
              <svg width="54" height="48" viewBox="0 0 52 46">
                <path d="M26 2L50 44H2Z" fill={triC} />
                <text x="26" y="34" textAnchor="middle" fontSize="19" fontWeight="bold" fill="white">!</text>
              </svg>
            </div>
            <div style={{ fontSize:21, fontWeight:800, color:"#222", marginBottom:8 }}>Alertas de Riesgo País</div>
            <div style={{ fontSize:14, color:"#888", lineHeight:1.6, textAlign:"center" }}>Líneas con consumo ≥ 80% del límite asignado por país</div>
            <div style={{ marginTop:18, display:"flex", justifyContent:"center", gap:8, flexWrap:"wrap" }}>
              {[["#dc2626",`🔴 ${criticos.length} críticas`],["#f59e0b",`🟡 ${normales.length} alertas`],["#6b7280",`${paisesAf} países`]].map(([bg,t]) => (
                <span key={t} style={{ background:bg, color:"#fff", borderRadius:20, padding:"4px 12px", fontSize:12, fontWeight:700 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom:8 }}>
          <div style={{ fontSize:12, fontWeight:800, color:"#555", textTransform:"uppercase", letterSpacing:1.2, marginBottom:14 }}>Resumen Global</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
            {[["Entidades",df.length,"#222"],["Países",paisesN,"#222"],["Alertas activas",ALL_ALERTAS.length,ALL_ALERTAS.length>0?"#f59e0b":"#222"],["Casos críticos",criticos.length,criticos.length>0?"#dc2626":"#222"]].map(([l,v,c]) => (
              <div key={l} style={{ background:"#fff", borderRadius:12, padding:"18px 20px", textAlign:"center", boxShadow:"0 1px 6px rgba(0,0,0,0.07)" }}>
                <div style={{ fontSize:32, fontWeight:900, color:c }}>{v}</div>
                <div style={{ fontSize:12, color:"#888", marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background:OR, padding:"46px 32px", textAlign:"center" }}>
        <p style={{ color:"#fff", fontSize:20, fontWeight:700, fontStyle:"italic", letterSpacing:3, textTransform:"uppercase", margin:0 }}>Cada resultado cuenta una historia</p>
      </div>
    </div>
  );
}

function Busqueda({ onBack, country, setCountry }) {
  const [search, setSearch]         = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [showDrop, setShowDrop]     = useState(false);

  const df      = country === "colombia" ? COLOMBIA_DATA : PANAMA_DATA;
  const prodMap = country === "colombia" ? PROD_MAP : PROD_MAP_PAN;
  const allIds  = useMemo(() => [...new Set(df.map(d => d.id))].sort((a,b) => a-b), [df]);
  const filtered = useMemo(() => !search ? allIds : allIds.filter(id => String(id).includes(search)), [search, allIds]);
  const record   = useMemo(() => selectedId ? df.find(d => d.id === selectedId) : null, [selectedId, df]);
  const riesgoLines = useMemo(() => record ? (RIESGO[record.pais] || []) : [], [record]);
  const riesgoTotal = riesgoLines.find(l => l.linea === "Total Transferência");
  const alertas     = useMemo(() => record ? getAlertas(riesgoLines) : [], [riesgoLines, record]);

  const pick  = (id) => { setSelectedId(id); setSearch(String(id)); setShowDrop(false); };
  const flag  = country === "colombia" ? "🇨🇴" : "🇵🇦";
  const label = country === "colombia" ? "Colombia" : "Panamá";

  return (
    <div style={{ ...F, background:"#f7f7f7", minHeight:"100vh" }}>
      <Header title={`Búsqueda — ${flag} ${label}`} onBack={onBack} />
      <div style={{ padding:"24px 32px" }}>

        <div style={{ marginBottom:18, display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ fontSize:12, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:1 }}>Base:</span>
          <div style={{ display:"inline-flex", border:`2px solid ${OR}`, borderRadius:10, overflow:"hidden" }}>
            {[["colombia","🇨🇴 Colombia"],["panama","🇵🇦 Panamá"]].map(([k,v]) => (
              <button key={k} onClick={() => { setCountry(k); setSelectedId(null); setSearch(""); }}
                style={{ padding:"7px 20px", fontSize:13, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit",
                  background: country===k ? OR : "#fff", color: country===k ? "#fff" : OR }}>{v}</button>
            ))}
          </div>
        </div>

        <div style={{ background:"#fff", borderRadius:14, padding:"20px 24px", marginBottom:22, boxShadow:"0 1px 6px rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize:12, fontWeight:700, color:"#555", textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>Buscar por ID Solcred</div>
          <div style={{ position:"relative" }}>
            <input value={search} onChange={e => { setSearch(e.target.value); setShowDrop(true); setSelectedId(null); }}
              onFocus={() => setShowDrop(true)} placeholder="Ej: 4275"
              style={{ width:"100%", boxSizing:"border-box", border:`2px solid ${OR}`, borderRadius:9, padding:"11px 14px", fontSize:16, outline:"none", color:"#111", fontFamily:"inherit" }} />
            {showDrop && filtered.length > 0 && (
              <div style={{ position:"absolute", top:"100%", left:0, right:0, background:"#fff", border:"1px solid #eee", borderRadius:9, zIndex:100, maxHeight:220, overflowY:"auto", boxShadow:"0 4px 16px rgba(0,0,0,0.12)", marginTop:4 }}>
                {filtered.slice(0,50).map(id => (
                  <div key={id} onClick={() => pick(id)}
                    style={{ padding:"10px 14px", cursor:"pointer", fontSize:14, borderBottom:"1px solid #f3f4f6", color:"#111", background: id===selectedId?OR_L:"#fff" }}
                    onMouseEnter={e => e.currentTarget.style.background = OR_L}
                    onMouseLeave={e => e.currentTarget.style.background = id===selectedId?OR_L:"#fff"}>
                    ID {id} — País {df.find(d=>d.id===id)?.pais}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ marginTop:7, fontSize:12, color:"#aaa" }}>{allIds.length} registros disponibles</div>
        </div>

        {record && (
          <>
            <div style={{ background:OR, borderRadius:14, padding:"18px 24px", marginBottom:20, display:"flex", alignItems:"center", gap:22, flexWrap:"wrap", boxShadow:"0 4px 14px rgba(255,98,0,0.2)" }}>
              {[["ID Solcred",record.id,"26px"],["País",record.pais,"22px"],["Base",`${flag} ${label}`,"17px"]].map(([lbl,val,sz]) => (
                <div key={lbl}>
                  <div style={{ fontSize:10, color:"rgba(255,255,255,0.8)", textTransform:"uppercase", letterSpacing:1.5 }}>{lbl}</div>
                  <div style={{ fontSize:sz, fontWeight:900, color:"#fff" }}>{val}</div>
                </div>
              ))}
              <div style={{ width:1, height:44, background:"rgba(255,255,255,0.3)" }} />
              <div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.8)", textTransform:"uppercase", letterSpacing:1.5 }}>Rating</div>
                <div style={{ background:"#fff", color:OR, borderRadius:7, padding:"3px 12px", fontSize:17, fontWeight:900, display:"inline-block" }}>{record.rating||"N/A"}</div>
              </div>
              <div style={{ marginLeft:"auto", textAlign:"right" }}>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.8)", textTransform:"uppercase", letterSpacing:1.5 }}>Total Disponible</div>
                <div style={{ fontSize:22, fontWeight:900, color:"#fff" }}>{fmt(record.totalDisponible)}</div>
              </div>
            </div>

            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:13, fontWeight:800, color:"#222", textTransform:"uppercase", letterSpacing:1.2, marginBottom:4 }}>Cupos Disponibles por Tipo de Transacción</div>
              <div style={{ fontSize:11, color:"#aaa", marginBottom:14 }}>Consumo Bancos Internacionales (USD) · Disponible Riesgo País por línea (USD)</div>
              <div style={{ display:"grid", gridTemplateColumns:`repeat(${Object.keys(prodMap).length},1fr)`, gap:14 }}>
                {Object.entries(prodMap).map(([tipo, linea]) => {
                  const valC    = record.disponibles[tipo] || 0;
                  const rpL     = riesgoLines.find(l => l.linea === linea);
                  const limU    = rpL ? rpL.limite    : null;
                  const dispR   = rpL ? rpL.disponible: null;
                  const consoR  = rpL ? rpL.consumo   : null;
                  const pct     = (limU && limU > 0 && consoR !== null) ? Math.min(100, (consoR / limU) * 100) : 0;
                  const barC    = pct >= 95 ? "#dc2626" : pct >= 80 ? "#f59e0b" : OR;
                  return (
                    <div key={tipo} style={{ background:"#fff", borderRadius:13, padding:"18px 16px 14px", borderTop:`5px solid ${OR}`, boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
                      <div style={{ fontSize:11, color:"#777", fontWeight:700, textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>{tipo}</div>
                      <div style={{ fontSize:10, color:"#aaa", marginBottom:2 }}>Disponible (Consumo)</div>
                      <div style={{ fontSize:19, fontWeight:800, color: valC>0?OR_D:"#bbb" }}>{fmt(valC)}</div>
                      <div style={{ height:1, background:"#f0f0f0", margin:"10px 0" }} />
                      <div style={{ fontSize:10, color:"#aaa", marginBottom:2 }}>Disponible País (Riesgo)</div>
                      <div style={{ fontSize:19, fontWeight:800, color: (dispR&&dispR>0)?"#1d4ed8":"#bbb" }}>{fmt(dispR)}</div>
                      {limU !== null && (
                        <>
                          <div style={{ height:6, background:"#f0f0f0", borderRadius:4, marginTop:12, overflow:"hidden" }}>
                            <div style={{ height:6, background:barC, width:pct+"%", borderRadius:4 }} />
                          </div>
                          <div style={{ fontSize:10, color:"#aaa", marginTop:4 }}>
                            Límite: {fmt(limU)} · Consumo: {fmt(consoR)} · <span style={{color:barC,fontWeight:700}}>{pct.toFixed(1)}% del límite consumido</span>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {alertas.length > 0 && (
              <div style={{ marginBottom:20 }}>
                <div style={{ fontSize:13, fontWeight:800, color:"#222", textTransform:"uppercase", letterSpacing:1.2, marginBottom:4 }}>⚠ {alertas.length} Alertas de Riesgo País</div>
                <div style={{ fontSize:11, color:"#aaa", marginBottom:14 }}>Líneas con consumo ≥ 80% del límite asignado al país</div>
                {alertas.map((a,i) => <AlertaCard key={i} a={a} showPais={false} />)}
              </div>
            )}

            <div>
              <div style={{ fontSize:13, fontWeight:800, color:"#222", textTransform:"uppercase", letterSpacing:1.2, marginBottom:4 }}>Riesgo País — País {record.pais}</div>
              <div style={{ fontSize:11, color:"#aaa", marginBottom:14 }}>Fuente: Riesgo País · USD</div>
              {riesgoTotal && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginBottom:16 }}>
                  {[["Límite Total",riesgoTotal.limite,"#fff",OR_D],["Consumo Total",riesgoTotal.consumo,"#fff",OR_D],["Disponible Total",riesgoTotal.disponible,OR,"#fff"]].map(([l,v,bg,fc]) => (
                    <div key={l} style={{ background:bg, borderRadius:12, padding:"16px 20px", boxShadow:"0 1px 4px rgba(0,0,0,0.07)" }}>
                      <div style={{ fontSize:10, color: bg===OR?"rgba(255,255,255,0.8)":"#888", textTransform:"uppercase", letterSpacing:1.2, marginBottom:4 }}>{l}</div>
                      <div style={{ fontSize:21, fontWeight:800, color:fc }}>{fmt(v)}</div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ background:"#fff", borderRadius:13, overflow:"hidden", boxShadow:"0 1px 6px rgba(0,0,0,0.07)" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                  <thead>
                    <tr style={{ background:OR_L }}>
                      {["Línea","Límite (USD)","Consumo (USD)","Disponible (USD)"].map(h => (
                        <th key={h} style={{ padding:"10px 16px", textAlign:h==="Línea"?"left":"right", fontWeight:700, color:"#333", borderBottom:`2px solid ${OR}` }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {riesgoLines.map((l,i) => {
                      const isT   = l.linea.startsWith("Total");
                      const isSub = l.linea.startsWith("1.1")||l.linea.startsWith("1.2")||l.linea.startsWith("6.");
                      return (
                        <tr key={i} style={{ background:isT?OR_L:i%2===0?"#fff":"#fafafa", fontWeight:isT?700:400 }}>
                          <td style={{ padding:"9px 16px", paddingLeft:isSub?30:16, color:"#333", borderBottom:"1px solid #f0f0f0" }}>{l.linea}</td>
                          <td style={{ padding:"9px 16px", textAlign:"right", color:"#555", borderBottom:"1px solid #f0f0f0" }}>{fmt(l.limite)}</td>
                          <td style={{ padding:"9px 16px", textAlign:"right", color:"#555", borderBottom:"1px solid #f0f0f0" }}>{fmt(l.consumo)}</td>
                          <td style={{ padding:"9px 16px", textAlign:"right", borderBottom:"1px solid #f0f0f0", color:l.disponible>0?OR_D:"#bbb", fontWeight:isT?700:400 }}>{fmt(l.disponible)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
        {!record && (
          <div style={{ background:"#fff", borderRadius:14, padding:"48px 28px", textAlign:"center", color:"#aaa", boxShadow:"0 1px 6px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize:44, marginBottom:14 }}>🔍</div>
            <div style={{ fontSize:17, fontWeight:600, color:"#333" }}>Busca un ID Solcred para ver sus cupos</div>
            <div style={{ fontSize:13, marginTop:8 }}>Disponible Consumo · Disponible Riesgo País · Todo en USD</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Alertas({ onBack }) {
  const [filtro, setFiltro] = useState("todas");
  const criticos = ALL_ALERTAS.filter(a => a.pct >= 95);
  const normales = ALL_ALERTAS.filter(a => a.pct >= 80 && a.pct < 95);
  const lista    = filtro==="criticas"?criticos:filtro==="alerta"?normales:ALL_ALERTAS;
  return (
    <div style={{ ...F, background:"#f7f7f7", minHeight:"100vh" }}>
      <Header title="Alertas de Riesgo País" onBack={onBack} />
      <div style={{ padding:"24px 32px" }}>
        <div style={{ display:"flex", gap:10, marginBottom:20, flexWrap:"wrap" }}>
          {[["todas","Todas",ALL_ALERTAS.length,"#6b7280"],["criticas","Críticas",criticos.length,"#dc2626"],["alerta","Alertas",normales.length,"#f59e0b"]].map(([k,lbl,n,c]) => (
            <button key={k} onClick={() => setFiltro(k)}
              style={{ background:filtro===k?c:"#fff", color:filtro===k?"#fff":c, border:`2px solid ${c}`,
                borderRadius:20, padding:"8px 20px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
              {lbl} ({n})
            </button>
          ))}
        </div>
        <div style={{ marginBottom:12, fontWeight:700, color:"#333" }}>{lista.length} resultado(s)</div>
        {lista.length === 0
          ? <div style={{ background:"#fff", borderRadius:14, padding:"40px", textAlign:"center", color:"#aaa" }}>✅ Sin alertas en esta categoría</div>
          : lista.map((a,i) => <AlertaCard key={i} a={a} showPais={true} />)
        }
      </div>
    </div>
  );
}

export default function App() {
  const [page,    setPage]    = useState("home");
  const [country, setCountry] = useState("colombia");
  if (page === "busqueda") return <Busqueda onBack={() => setPage("home")} country={country} setCountry={setCountry} />;
  if (page === "alertas")  return <Alertas  onBack={() => setPage("home")} />;
  return <Home onNavigate={setPage} country={country} setCountry={setCountry} />;
}

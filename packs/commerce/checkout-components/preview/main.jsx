import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Checkout1 from "../src/Checkout1.jsx";
import Checkout2 from "../src/Checkout2.jsx";
import Checkout3 from "../src/Checkout3.jsx";
import Checkout4 from "../src/Checkout4.jsx";
import Checkout5 from "../src/Checkout5.jsx";
import Checkout6 from "../src/Checkout6.jsx";
import Checkout7 from "../src/Checkout7.jsx";
import Checkout8 from "../src/Checkout8.jsx";
import Checkout9 from "../src/Checkout9.jsx";
import Checkout10 from "../src/Checkout10.jsx";
import Checkout11 from "../src/Checkout11.jsx";
import Checkout12 from "../src/Checkout12.jsx";
import Checkout13 from "../src/Checkout13.jsx";
import Checkout14 from "../src/Checkout14.jsx";
import Checkout15 from "../src/Checkout15.jsx";
import Checkout16 from "../src/Checkout16.jsx";
import Checkout17 from "../src/Checkout17.jsx";
import Checkout18 from "../src/Checkout18.jsx";
import Checkout19 from "../src/Checkout19.jsx";
import Checkout20 from "../src/Checkout20.jsx";
const ALL = [Checkout1,Checkout2,Checkout3,Checkout4,Checkout5,Checkout6,Checkout7,Checkout8,Checkout9,Checkout10,Checkout11,Checkout12,Checkout13,Checkout14,Checkout15,Checkout16,Checkout17,Checkout18,Checkout19,Checkout20];
const LABELS = ["Multi-step · minimal","Multi-step · dark","Multi-step · bold","Multi-step · luxury","Single-page · warm","Single-page · minimal","Single-page · dark neon","Cart · minimal","Cart drawer · bold","Cart · luxury","Payment · card form","Payment · saved cards","Payment · wallets","Confirmation · minimal","Confirmation · bold","Confirmation · luxury","PDP · minimal","PDP · dark","Grid · warm","Grid · dark luxury"];
function App() {
  const init = Math.max(0, Math.min(19, (parseInt(location.hash.slice(1)) || 1) - 1));
  const [i, setI] = useState(init);
  useEffect(() => { history.replaceState(null, "", "#" + (i + 1)); window.scrollTo(0, 0); }, [i]);
  const C = ALL[i];
  return (<>
    <div style={{position:"sticky",top:0,zIndex:50}} className="flex items-center gap-2 overflow-x-auto bg-neutral-900 px-3 py-2 text-xs text-white">
      {ALL.map((_, k) => <button key={k} onClick={() => setI(k)} title={LABELS[k]} className={`shrink-0 rounded px-2 py-1 ${k===i?"bg-white text-black":"bg-neutral-800 hover:bg-neutral-700"}`}>{k+1}</button>)}
      <span className="ml-2 shrink-0 text-neutral-400">Checkout{i+1} — {LABELS[i]}</span>
    </div>
    <C key={i} />
  </>);
}
createRoot(document.getElementById("root")).render(<App />);

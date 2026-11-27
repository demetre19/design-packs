{/* Mechanism: archive index tabs | Interaction: active tab measure travels along the keyline | Duration: 200ms */}
import { useState } from 'react';
const tabs=['Register','Evidence','Archive'];
export default function Ui9(){const [a,setA]=useState(0);return <div className="w-full max-w-lg border-b border-ink text-ink"><div className="flex flex-wrap gap-1">{tabs.map((t,i)=><button key={t} onClick={()=>setA(i)} className="group relative px-4 py-3"><span className={`type-micro transition-transform duration-200 ease-crisp ${a===i?'text-ink translate-x-1':'text-secondary'}`}>{t}</span><span className={`absolute bottom-0 left-0 h-[3px] bg-accent transition-all duration-200 ease-crisp ${a===i?'w-full':'w-0 group-hover:w-8'}`}/></button>)}</div></div>}

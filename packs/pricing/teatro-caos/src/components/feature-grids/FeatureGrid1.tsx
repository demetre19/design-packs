import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid1() {
  const items = [
    { title: "IL CORPO MECCANICO", subtitle: "ATTO I // 2026", img: "https://picsum.photos/seed/fg1/400/400", credits: "REGIA: M. VANELLI" },
    { title: "L'ABISSO VERTICALE", subtitle: "ATTO II // 2026", img: "https://picsum.photos/seed/fg2/400/400", credits: "REGIA: E. ROSSI" },
    { title: "STUDI SULLA RABBIA", subtitle: "ATTO III // 2026", img: "https://picsum.photos/seed/fg3/400/400", credits: "COREOGRAFIA: G. BRENTA" },
    { title: "TRAGEDIA DEL SILENZIO", subtitle: "ATTO IV // 2026", img: "https://picsum.photos/seed/fg4/400/400", credits: "CON IL COLLETTIVO" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">REPERTOIRE // MINI-COLLAGES</h2>
        <span className="font-mono-num text-xs uppercase">STAGIONE 2026</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map((item, idx) => (
          <div key={idx} className="border border-white p-3 flex flex-col justify-between bg-zinc-950 group hover:bg-white hover:text-black transition-colors">
            <div>
              <div className="flex justify-between items-center text-[9px] font-mono-num mb-2 text-zinc-400 group-hover:text-black">
                <span>0{idx+1} // PROD</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
              <div className="overflow-hidden border border-white mb-3 h-40">
                <img src={item.img} className="w-full h-full collage-img group-hover:contrast-200" alt={item.title} />
              </div>
              <h3 className="font-display text-xl tracking-tight leading-none mb-1">{item.title}</h3>
              <p className="text-[10px] font-mono-num text-zinc-400 group-hover:text-zinc-800 uppercase">{item.subtitle}</p>
            </div>
            <div className="border-t border-white/40 group-hover:border-black/40 pt-2 mt-4 text-[9px] font-mono-num uppercase">
              {item.credits}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

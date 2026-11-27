import React from 'react';
import { Ruler, Shield, Layers, Compass } from 'lucide-react';

export function FeatureGrid1() {
  const cards = [
    { id: "01", title: "Seismic Load Matrices", sec: "SEC A-A", desc: "Advanced moment-resisting steel frames engineered for maximum lateral displacement resistance." },
    { id: "02", title: "Thermal Facade Integration", sec: "SEC B-B", desc: "Double-skin curtain wall assemblies optimized for solar heat gain coefficient reduction." },
    { id: "03", title: "Foundation Caisson Systems", sec: "SEC C-C", desc: "Deep-soil drilled shaft concrete piers rated for high load-bearing structural towers." },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-4">
          <div>
            <span className="text-xs text-cyan-300">FEATURE GRID // 01</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Structural Details & Assemblies</h2>
          </div>
          <div className="text-xs text-cyan-200 mt-2 md:mt-0">SCALE 1:50 | 3-COLUMN DETAIL MATRIX</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="border-2 border-white/40 p-6 bg-[#142d48] relative hover:border-cyan-300 transition-colors">
              <div className="absolute top-2 right-2 text-[10px] bg-cyan-400 text-[#1b3a5c] px-2 py-0.5 font-bold">
                {card.sec}
              </div>
              <div className="text-xs text-cyan-300 mb-2">DETAIL REF: [{card.id}]</div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-3">{card.title}</h3>
              <p className="text-xs text-cyan-100 leading-relaxed">{card.desc}</p>
              <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center text-[10px] text-cyan-300">
                <span>TOLERANCE: ±0.5MM</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

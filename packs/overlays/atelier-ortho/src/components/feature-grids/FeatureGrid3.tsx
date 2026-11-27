import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

export function FeatureGrid3() {
  const rows = [
    { num: "01", title: "EAST ELEVATION - CURTAIN WALL GLAZING", spec: "LOW-E TRIPLE GLAZING | ALUM FRAME", span: "SPAN: 18000MM" },
    { num: "02", title: "SOUTH ELEVATION - SOLAR LOUVER SYSTEM", spec: "ANODIZED ALUMINUM | MOTORIZED PIVOT", span: "SPAN: 24000MM" },
    { num: "03", title: "NORTH ELEVATION - ARCHITECTURAL CONCRETE", spec: "BOARD-FORMED FINISH | SEALED MATTE", span: "SPAN: 15000MM" },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">FEATURE GRID // 03</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Alternating Elevation Rows</h2>
        </div>

        <div className="space-y-6">
          {rows.map((row, idx) => (
            <div key={idx} className="border border-white/30 p-6 bg-[#142d48] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-cyan-300 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="border border-cyan-300 text-cyan-300 px-2 py-0.5 text-[10px]">ROW [{row.num}]</span>
                  <span className="text-[10px] text-cyan-200">{row.span}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wide">{row.title}</h3>
                <p className="text-xs text-cyan-100">{row.spec}</p>
              </div>
              <button className="border border-cyan-400 px-4 py-2 text-xs uppercase text-cyan-300 hover:bg-cyan-400 hover:text-[#1b3a5c] transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap">
                <span>INSPECT ROW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

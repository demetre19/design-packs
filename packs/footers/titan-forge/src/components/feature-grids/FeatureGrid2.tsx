import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FeatureGrid2() {
  const rows = [
    { num: "01", title: "AUTONOMOUS EXCAVATION MESH", annotation: "LATENCY < 0.05MS // 100% AUTONOMOUS FLEET SYNC" },
    { num: "02", title: "DEEP CORE DIAMOND DRILLING", annotation: "14,000 PSI // DIAMOND MATRIX BIT // THERMAL SHIELD" },
    { num: "03", title: "MEGawatt ORE CRUSHING MODULES", annotation: "450K TONS/DAY // HIGH-TENSILE ALLOY JAWS" },
    { num: "04", title: "REAL-TIME ACOUSTIC TELEMETRY", annotation: "PREDICTIVE FAILURE ANALYSIS // AI VIBRATION SENSORS" },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          FEATURE GRID // ALTERNATING ROWS 02
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          INDUSTRIAL <span className="text-[#f25c05]">ARCHITECTURE</span> MATRIX.
        </h2>

        <div className="space-y-4">
          {rows.map((row, idx) => (
            <div 
              key={row.num} 
              className={`border-2 border-black p-6 flex flex-col md:flex-row items-start md:items-center justify-between ${idx % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className={`font-mono text-xl font-black ${idx % 2 === 0 ? 'text-[#f25c05]' : 'text-neutral-400'}`}>{row.num}</span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{row.title}</h3>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 border ${idx % 2 === 0 ? 'border-neutral-800 text-neutral-400 bg-neutral-900' : 'border-black text-neutral-600 bg-[#f5f4f0]'}`}>
                  {row.annotation}
                </span>
                <ArrowRight className={`w-5 h-5 ${idx % 2 === 0 ? 'text-[#f25c05]' : 'text-black'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

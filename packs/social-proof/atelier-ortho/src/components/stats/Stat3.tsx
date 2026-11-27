import React from 'react';
import { FileText } from 'lucide-react';

export function Stat3() {
  const specs = [
    { label: "TOTAL STRUCTURAL TONNAGE", val: "24,500 TONS", code: "SPEC-01" },
    { label: "AVERAGE SPAN DISTANCE", val: "18.5 METERS", code: "SPEC-02" },
    { label: "SEISMIC RATING CAPACITY", val: "MAGNITUDE 9.0", code: "SPEC-03" },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">STATS SECTION // 03</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Specification Rows</h2>
        </div>

        <div className="space-y-4">
          {specs.map((spec, idx) => (
            <div key={idx} className="border border-white/30 p-6 bg-[#142d48] flex justify-between items-center">
              <div>
                <span className="text-[10px] text-cyan-300">CODE: {spec.code}</span>
                <div className="text-sm md:text-base font-bold uppercase mt-1">{spec.label}</div>
              </div>
              <div className="text-xl md:text-2xl font-bold text-cyan-300">{spec.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

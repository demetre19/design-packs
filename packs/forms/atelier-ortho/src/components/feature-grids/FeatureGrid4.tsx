import React from 'react';
import { Compass, Grid } from 'lucide-react';

export function FeatureGrid4() {
  const items = [
    { code: "A-01", title: "GEOMETRIC AXIS & DATUM", desc: "Global coordinates and primary survey markers." },
    { code: "A-02", title: "STRUCTURAL CORE & SHEAR", desc: "Reinforced concrete core walls and elevator shafts." },
    { code: "B-01", title: "HVAC DUCTING & PLENUM", desc: "Distribution routing and variable air volume units." },
    { code: "B-02", title: "ELECTRICAL BUS-BAR RISERS", desc: "High-voltage distribution and emergency backup." },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-[#1b3a5c]/30 pb-4">
          <span className="text-xs text-[#1b3a5c]/70">FEATURE GRID // 04</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">2X2 Center-Line Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Center-line cross */}
          <div className="absolute inset-x-0 top-1/2 hidden md:block border-t border-dashed border-[#1b3a5c]/40 pointer-events-none z-10" />
          <div className="absolute inset-y-0 left-1/2 hidden md:block border-l border-dashed border-[#1b3a5c]/40 pointer-events-none z-10" />

          {items.map((item, idx) => (
            <div key={idx} className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md relative">
              <div className="absolute top-2 right-2 text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5">
                {item.code}
              </div>
              <h3 className="text-base font-bold uppercase tracking-wide mb-3">{item.title}</h3>
              <p className="text-xs text-[#1b3a5c]/80 leading-relaxed mb-4">{item.desc}</p>
              <div className="text-[10px] text-[#1b3a5c]/60 flex justify-between pt-3 border-t border-[#1b3a5c]/20">
                <span>COORD: QUADRANT {idx + 1}</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

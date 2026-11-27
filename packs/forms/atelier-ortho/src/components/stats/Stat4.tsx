import React from 'react';
import { Grid } from 'lucide-react';

export function Stat4() {
  const items = [
    { grid: "GRID A1", num: "100%", label: "Tolerances Verified" },
    { grid: "GRID B2", num: "35+", label: "Global Awards" },
    { grid: "GRID C3", num: "12M", label: "Sq. Ft. Engineered" },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-[#1b3a5c]/30 pb-4">
          <span className="text-xs text-[#1b3a5c]/70">STATS SECTION // 04</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Big Numerals & Grid References</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md relative">
              <div className="absolute top-2 right-2 text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5">
                {item.grid}
              </div>
              <div className="text-5xl font-bold my-4 text-[#1b3a5c]">{item.num}</div>
              <div className="text-xs uppercase font-bold tracking-wide">{item.label}</div>
              <div className="text-[9px] text-[#1b3a5c]/60 mt-4 pt-2 border-t border-[#1b3a5c]/20">
                SCALE 1:50 | VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

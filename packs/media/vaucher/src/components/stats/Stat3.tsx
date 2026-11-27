import React from 'react';
import { Compass } from 'lucide-react';

export function Stat3() {
  const rows = [
    { code: "REG. 01", title: "Balance Wheel Frequency", val: "4 Hz / 28,800 Alt/h" },
    { code: "REG. 02", title: "Mainspring Torque Tension", val: "Constant Force Barrels" },
    { code: "REG. 03", title: "Escapement Efficiency", val: "99.4% Energy Transfer" }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">STAT 03 · MONO READOUT ROWS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Readout Matrix</h2>
      </div>

      <div className="divide-y divide-[#d0d0cc] border-y border-[#d0d0cc] bg-white font-mono text-xs">
        {rows.map((r, idx) => (
          <div key={idx} className="p-6 flex justify-between items-center">
            <div className="space-y-1">
              <span className="text-[#2e5e8e] text-[10px] tracking-widest">{r.code}</span>
              <div className="text-[#232a30] font-medium text-sm">{r.title}</div>
            </div>
            <div className="text-[#232a30]/80 tracking-wider font-medium">{r.val}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

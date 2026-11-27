import React from 'react';

export function Stat4() {
  const rows = [
    { label: 'BATTERY STABILITY', val: '99.8%' },
    { label: 'THERMAL DISSIPATION', val: '1.5°C VAR' },
    { label: 'ECU SAMPLING RATE', val: '5,000 Hz' },
    { label: 'AERO DOWNFORCE RATIO', val: '340 KG' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// SINGLE DOMINANT NUMBER WITH MICRO-BREAKDOWN</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Single dominant number */}
          <div className="lg:col-span-5 border-2 border-black p-8 bg-black text-white">
            <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2">// DOMINANT INDEX</div>
            <div className="text-8xl sm:text-9xl font-black tracking-tighter text-white mb-2">
              99.4%
            </div>
            <div className="font-mono text-xs text-neutral-400 uppercase">
              OVERALL KINETIC EFFICIENCY RATING ACROSS CIRCUIT TESTS
            </div>
          </div>

          {/* Micro-breakdown rows */}
          <div className="lg:col-span-7 space-y-4 font-mono text-xs">
            <div className="text-neutral-500 font-bold mb-4">// DETAILED MICRO-BREAKDOWN REGISTER</div>
            {rows.map((row, idx) => (
              <div key={idx} className="border-2 border-black p-4 bg-white flex justify-between items-center">
                <span className="font-bold uppercase text-neutral-800">{row.label}</span>
                <span className="bg-black text-white px-3 py-1 font-black text-xs">{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

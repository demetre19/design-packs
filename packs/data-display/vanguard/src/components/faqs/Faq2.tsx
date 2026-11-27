import React from 'react';

export function Faq2() {
  const items = [
    { q: 'FLIGHT CLEARANCE REQUIREMENTS', a: 'Level-4 security clearance and active operator callsign required for Bay 4 access.' },
    { q: 'WIND TUNNEL CFD ACCESS', a: 'Available via sortable priority contracts with real-time pressure matrix downloads.' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FAQ // 02</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            TWO-COLUMN TECHNICAL <span className="text-[#ff3d00]">FAQ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] space-y-3"
            >
              <h3 className="text-sm font-black uppercase font-sans text-[#ff3d00]">{item.q}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

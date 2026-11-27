import React from 'react';

export function FeatureGrid2() {
  const rows = [
    { title: 'TITANIUM TRELLIS FRAME', sub: '01 // ULTRA RIGID CHASSIS', desc: 'Aerospace grade alloy shaving 14kg while increasing torsional stiffness by 40%.' },
    { title: 'MAGNETIC LEVITATION SUSPENSION', sub: '02 // DAMPING MATRIX', desc: 'Active damping adjustments responding in 2 milliseconds to track surface anomalies.' },
    { title: 'CARBON-CERAMIC BRAKING', sub: '03 // STOPPING FORCE', desc: '390mm dual front rotors with titanium 8-piston monobloc calipers.' },
  ];

  return (
    <section className="w-full bg-black text-white py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// COLLIDING ROWS ARCHITECTURE</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          SYSTEM <span className="text-[#ff2e00]">SPECIFICATIONS</span>
        </h2>

        {/* Features as large-title/small-text colliding rows */}
        <div className="space-y-6">
          {rows.map((row, idx) => (
            <div key={idx} className="border-2 border-neutral-800 p-8 bg-neutral-900 hover:border-[#ff2e00] transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="max-w-xl">
                <div className="font-mono text-[10px] text-[#ff2e00] mb-1 font-bold">{row.sub}</div>
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">{row.title}</h3>
              </div>
              <div className="max-w-xs font-mono text-xs text-neutral-400 leading-relaxed">
                {row.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export function FeatureGrid2() {
  const items = [
    { num: '01', title: 'BILLET CRANKSHAFT FORGING', desc: 'CNC machined from high-nickel alloy steel with deep-nitrided journal hardening for ultimate torsional rigidity.' },
    { num: '02', title: 'DRY SUMP SCAVENGING', desc: 'Multi-stage positive displacement pumps ensuring consistent oil pressure under 3.5G lateral cornering loads.' },
    { num: '03', title: 'TITANIUM VALVE TRAIN', desc: 'Hollow-stem sodium-cooled exhaust valves engineered for high-rev thermal dissipation.' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 02. METRIC REGISTERS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            ADVANCED <span className="text-[#ffd500]">POWERTRAIN MODULES.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#ffd500] transition-colors relative overflow-hidden">
              <div className="absolute right-4 top-2 text-7xl font-black text-zinc-900/60 select-none pointer-events-none">
                {item.num}
              </div>
              <div className="max-w-xl relative z-10">
                <span className="text-xs text-[#ffd500] font-bold block mb-1">MODULE // {item.num}</span>
                <h3 className="text-xl font-extrabold uppercase tracking-wider mb-2 text-white">{item.title}</h3>
                <p className="text-zinc-400 text-xs font-sans">{item.desc}</p>
              </div>
              <div className="relative z-10 flex items-center gap-4 text-xs">
                <span className="bg-[#0c0d0f] border border-[#262c36] px-4 py-2 text-zinc-300">TOLERANCE: ±0.002 MM</span>
                <span className="text-[#ffd500] font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

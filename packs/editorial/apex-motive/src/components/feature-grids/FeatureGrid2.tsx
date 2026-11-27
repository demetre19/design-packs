import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FeatureGrid2() {
  const rows = [
    { num: '01', title: 'DIRECT OIL COOLING', spec: '12 L/MIN FLOW RATE', desc: 'Synthetic dielectric fluid circulating directly around copper stator windings to prevent thermal throttling.' },
    { num: '02', title: 'TORQUE VECTORING', spec: '500 HZ UPDATE RATE', desc: 'Independent microsecond torque adjustment across dual rear wheels for cornering slip control.' },
    { num: '03', title: 'ACTIVE AERODYNAMICS', spec: '0.2s ACTUATION TIME', desc: 'Electro-mechanical front winglets deploying downforce dynamically during braking zones.' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// SYSTEM INNOVATION</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TECHNICAL ADVANCEMENTS</h2>
        </div>

        <div className="space-y-6">
          {rows.map((row, idx) => (
            <div key={idx} className="relative bg-[#16181d] border border-[#272a33] p-8 clip-corner overflow-hidden group hover:border-[#ff5a1f] transition-all">
              {/* Oversized faint numeral */}
              <div className="absolute right-4 bottom-[-20px] font-extrabold text-[120px] text-white/[0.03] select-none pointer-events-none">
                {row.num}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-2 flex items-center gap-4">
                  <span className="font-mono-spec text-2xl font-bold text-[#ff5a1f]">//{row.num}</span>
                  <span className="font-mono-spec text-xs text-neutral-500 uppercase">{row.spec}</span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-[#ff5a1f] transition-colors">{row.title}</h3>
                  <p className="font-mono-spec text-xs text-neutral-400 mt-2">{row.desc}</p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <button className="bg-transparent border border-[#272a33] text-white group-hover:border-[#ff5a1f] group-hover:text-[#ff5a1f] font-mono-spec text-xs px-6 py-3 clip-corner transition-all flex items-center gap-2 cursor-pointer">
                    <span>INSPECT DATA</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

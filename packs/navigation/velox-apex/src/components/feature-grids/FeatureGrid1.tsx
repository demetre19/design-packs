import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { num: '01', title: 'SOLID-STATE POWER CELL', desc: 'Next-gen energy density delivering 450km range with zero thermal degradation under track conditions.' },
    { num: '02', title: 'AERO WINGLET SUITE', desc: 'Active carbon fiber foils generate 340kg downforce at 280km/h for extreme cornering stability.' },
    { num: '03', title: 'NEURAL TRACTION MAP', desc: 'Real-time torque vectoring calculates tire slip 5,000 times per second across dual brushless motors.' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// ENGINEERING ARCHITECTURE</div>
            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
              BUILT FOR <span className="text-[#ff2e00]">EXTREMES</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500 mt-4 md:mt-0">
            [SYS // 03 CORE PILLARS]
          </div>
        </div>

        {/* 3-column cards with tiny headers and oversized index numerals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="border-2 border-black p-8 bg-white flex flex-col justify-between hover:bg-neutral-50 transition-colors relative group">
              <div className="absolute top-4 right-4 text-6xl font-black text-neutral-200 group-hover:text-[#ff2e00]/20 transition-colors select-none">
                {f.num}
              </div>
              <div className="relative z-10 mb-12">
                <div className="font-mono text-[10px] text-[#ff2e00] uppercase mb-2 font-bold">// PILLAR {f.num}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{f.title}</h3>
                <p className="font-mono text-xs text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
              <div className="pt-4 border-t border-black flex items-center justify-between font-mono text-xs font-bold">
                <span className="text-neutral-400">SPEC DEEP-DIVE</span>
                <ArrowUpRight className="w-4 h-4 text-[#ff2e00]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

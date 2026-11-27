import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    {
      num: "01",
      title: "Tectonic Integrity",
      desc: "Pure structural expression with zero decorative veneer. Materials are selected for their weathering patina and thermal mass.",
      spec: "CONCRETE & TIMBER"
    },
    {
      num: "02",
      title: "Topographic Harmony",
      desc: "Structures are embedded into existing contours, preserving natural drainage and micro-climates across every site.",
      spec: "SITE-SPECIFIC GEOMETRY"
    },
    {
      num: "03",
      title: "Calm Spatial Flow",
      desc: "Uninterrupted sightlines and precise daylight calibration designed to elevate daily ritual into meditative clarity.",
      spec: "DAYLIGHT OPTIMIZATION"
    }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">PRACTICE PILLARS</span>
            </div>
            <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Architectural Principles</h2>
          </div>
          <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">
            [ 03 CORE TENETS ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-[#f0efeb] border border-[#e2e0d8] p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-[#e2e0d8]">
                  <div className="flex items-center space-x-2">
                    <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-600">{f.num}</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase">{f.spec}</span>
                </div>
                <h3 className="text-xl font-medium text-[#16171a]">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
              <div className="pt-4 border-t border-[#e2e0d8]/60 flex items-center justify-between text-xs font-mono text-[#b5482e]">
                <span className="uppercase tracking-wider">Read Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

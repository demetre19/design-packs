import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeatureGrid2() {
  const items = [
    { num: "01", title: "RESEARCH & AUDIT", desc: "Deep dive into your brand's visual heritage and competitive landscape." },
    { num: "02", title: "PROTOTYPING LAB", desc: "Rapid tactile ink tests and high-fidelity interactive wireframes." },
    { num: "03", title: "PRODUCTION FORGE", desc: "Meticulous risograph printing and production-grade code deployment." },
    { num: "04", title: "LAUNCH & SCALE", desc: "Global delivery of print editions and seamless digital rollout." }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
              WORKFLOW ARCHITECTURE
            </div>
            <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
              HOW WE BUILD.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#111111]/70 max-w-sm mt-4 md:mt-0">
            Four sequential phases designed to eliminate fluff and maximize tactile impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border-3 border-[#111111] shadow-hard-lg p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-sm font-black px-3 py-1 mb-6 shadow-hard-sm">
                  {item.num}
                </div>
                <h3 className="font-grotesk font-black text-lg uppercase mb-3">{item.title}</h3>
                <p className="font-mono text-xs text-[#111111]/80 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#111111] flex items-center justify-between font-mono text-[10px] font-bold">
                <span>STATUS: READY</span>
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

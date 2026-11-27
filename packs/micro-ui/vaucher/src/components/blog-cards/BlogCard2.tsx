import React from 'react';
import { Compass, Clock } from 'lucide-react';

export function BlogCard2() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">BLOG CARD 02 · FEATURED ARTICLE + REGISTER ROWS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Curated Monograph</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Featured */}
        <div className="lg:col-span-7 bg-[#1c2128] text-white p-8 border border-[#2e5e8e]/40 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-center font-mono text-[10px] text-[#2e5e8e]">
              <span>FEATURED MONOGRAPH · REF. 88</span>
              <span>18.11.2026</span>
            </div>
            <h3 className="text-2xl font-light tracking-wide">The Architecture of Grand Complications</h3>
            <p className="font-mono text-xs text-white/70 tracking-wider leading-relaxed">
              An exhaustive analysis of split-seconds chronograph mechanisms and column wheel synchronization under extreme mainspring torque.
            </p>
          </div>
          <div className="relative z-10 pt-6">
            <button className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-6 py-2.5 hover:bg-white hover:text-[#232a30] transition-colors">
              READ MONOGRAPH
            </button>
          </div>
        </div>

        {/* Register rows */}
        <div className="lg:col-span-5 space-y-4">
          {[
            { ref: "REG. 01", title: "Balance Wheel Inertia Dynamics", date: "02.10.2026" },
            { ref: "REG. 02", title: "Thermal Compensation Alloys", date: "14.09.2026" },
            { ref: "REG. 03", title: "Sapphire Crystal Polish Standards", date: "29.08.2026" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#d0d0cc] p-6 space-y-2 hover:border-[#2e5e8e] transition-colors">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#232a30]/50">
                <span className="text-[#2e5e8e]">{item.ref}</span>
                <span>{item.date}</span>
              </div>
              <h4 className="text-base font-light tracking-wide text-[#232a30]">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

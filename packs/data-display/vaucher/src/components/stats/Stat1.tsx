import React from 'react';
import { Compass } from 'lucide-react';

export function Stat1() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">STAT 01 · PRECISION NUMERALS WITH TICK RULERS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Chronometric Metrics</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { num: "-1/+2", label: "SECONDS PER DIEM", ref: "TOLERANCE 01" },
          { num: "720", label: "HOURS TESTING REGIME", ref: "DURATION 02" },
          { num: "312", label: "INDIVIDUAL COMPONENTS", ref: "CALIBRE 320" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white border border-[#d0d0cc] p-8 space-y-4 relative">
            <div className="flex justify-between items-center font-mono text-[10px] text-[#2e5e8e]">
              <span>{stat.ref}</span>
              <span>VERIFIED</span>
            </div>
            <div className="font-mono text-4xl md:text-5xl font-light text-[#232a30]">{stat.num}</div>
            <div className="font-mono text-xs text-[#232a30]/70 tracking-[0.2em]">{stat.label}</div>

            {/* Tick ruler bottom edge */}
            <div className="w-full h-1 bg-[#d0d0cc] flex justify-between pt-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-[1px] h-1.5 bg-[#232a30]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';

export function Stats3() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          REGISTER STATS // STATS 03
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          EXTRACTION <span className="text-[#f25c05]">REGISTER</span> BENCHMARKS.
        </h2>

        {/* Register with thick divider bars */}
        <div className="border-4 border-black bg-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-mono">
            <div className="border-b-4 md:border-b-0 md:border-r-4 border-black pb-8 md:pb-0 md:pr-8">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">01 // GLOBAL SITES</span>
              <div className="text-5xl font-black font-sans tracking-tighter text-black mb-1">1,420</div>
              <span className="text-xs text-[#f25c05] font-bold uppercase">Active Extraction Basins</span>
            </div>

            <div className="border-b-4 md:border-b-0 md:border-r-4 border-black pb-8 md:pb-0 md:pr-8">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">02 // FLEET UNITS</span>
              <div className="text-5xl font-black font-sans tracking-tighter text-black mb-1">8,500</div>
              <span className="text-xs text-[#f25c05] font-bold uppercase">Autonomous Excavators</span>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">03 // UPTIME RECORD</span>
              <div className="text-5xl font-black font-sans tracking-tighter text-[#f25c05] mb-1">99.98%</div>
              <span className="text-xs text-black font-bold uppercase">Absolute SLA Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

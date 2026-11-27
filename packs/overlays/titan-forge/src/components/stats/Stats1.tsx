import React from 'react';

export function Stats1() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          SOLID BLACK TILES // STATS 01
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          GLOBAL EXTRACTION <span className="text-[#f25c05]">METRICS</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="bg-black text-white p-8 border-b-4 border-[#f25c05]">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">01 // PROFESSIONALS</div>
            <div className="text-4xl font-black font-sans tracking-tight">4,850+</div>
            <div className="text-[10px] text-[#f25c05] mt-1 uppercase">Certified Field Engineers</div>
          </div>

          <div className="bg-black text-white p-8 border-b-4 border-[#f25c05]">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">02 // HEAVY EQUIPMENT</div>
            <div className="text-4xl font-black font-sans tracking-tight">8,500</div>
            <div className="text-[10px] text-[#f25c05] mt-1 uppercase">Autonomous Units Deployed</div>
          </div>

          <div className="bg-black text-white p-8 border-b-4 border-[#f25c05]">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">03 // ACTIVE PROJECTS</div>
            <div className="text-4xl font-black font-sans tracking-tight">1,420</div>
            <div className="text-[10px] text-[#f25c05] mt-1 uppercase">Global Extraction Sites</div>
          </div>

          <div className="bg-black text-white p-8 border-b-4 border-[#f25c05]">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">04 // YEARS OPERATING</div>
            <div className="text-4xl font-black font-sans tracking-tight">34 YRS</div>
            <div className="text-[10px] text-[#f25c05] mt-1 uppercase">Uninterrupted Record</div>
          </div>
        </div>
      </div>
    </section>
  );
}

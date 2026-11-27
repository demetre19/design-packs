import React from 'react';

export function Stats4() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          DOMINANT TILE // STATS 04
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          MASTER <span className="text-[#f25c05]">METRIC</span> OVERVIEW.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Single dominant black tile */}
          <div className="lg:col-span-7 bg-black text-white p-10 border-4 border-black flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#f25c05] uppercase tracking-widest block mb-4">DOMINANT BENCHMARK // TONNAGE</span>
              <div className="text-6xl md:text-8xl font-black font-mono tracking-tighter mb-4 text-[#f25c05]">450K</div>
              <p className="font-mono text-xs text-neutral-300 uppercase tracking-wide">
                Tons of high-grade mineral ore extracted daily across global autonomous extraction nodes.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 font-mono text-[10px] text-neutral-500">
              ISO-9001 CERTIFIED EXTRACTION CAPACITY
            </div>
          </div>

          {/* Small supporting tiles */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="border-2 border-black bg-white p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase block mb-1">SUPPORTING METRIC 01</span>
                <div className="text-3xl font-black font-mono">0.04 MS</div>
              </div>
              <span className="font-mono text-xs text-neutral-600 uppercase mt-2">Fiber backbone latency</span>
            </div>

            <div className="border-2 border-black bg-white p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase block mb-1">SUPPORTING METRIC 02</span>
                <div className="text-3xl font-black font-mono text-[#f25c05]">14,000 PSI</div>
              </div>
              <span className="font-mono text-xs text-neutral-600 uppercase mt-2">Hydraulic pressure tolerance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

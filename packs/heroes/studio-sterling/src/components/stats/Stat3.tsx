import React from 'react';

export function Stat3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">SINGLE SPOTLIGHT STAT</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">STAT 03</span>
        </div>
        <div className="border border-black p-8 bg-neutral-50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-black pb-6 lg:pb-0 lg:pr-8">
            <div className="text-7xl md:text-9xl font-black tracking-tighter leading-none">99.8%</div>
            <div className="text-xs font-bold uppercase tracking-widest mt-2">TYPOGRAPHIC ACCURACY METRIC</div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold border border-black px-2 py-0.5 inline-block">ARCHIVAL AUDIT 2026</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">ZERO ERROR TOLERANCE IN PRINT PRODUCTION</h3>
            <p className="text-xs uppercase tracking-wider text-neutral-700 leading-relaxed">
              Every monograph and museum catalog produced by Studio Sterling undergoes a rigorous 4-stage manual proofing process, ensuring zero typographical anomalies across multilingual editions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

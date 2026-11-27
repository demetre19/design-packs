import React from 'react';

export function FeatureGrid3() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// ASYMMETRIC STAGGERED GRID</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          OFFSET <span className="text-[#ff2e00]">DYNAMICS</span>
        </h2>

        {/* Staggered asymmetric grid with offset columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 border-2 border-black p-8 bg-white space-y-6">
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold">MODULE 01 // KINETIC RECOVERY</div>
            <h3 className="text-3xl font-black uppercase tracking-tight">REGENERATIVE BRAKING KINETICS</h3>
            <p className="font-mono text-xs text-neutral-600 leading-relaxed">
              Captures up to 32% of kinetic energy during aggressive deceleration cycles and feeds it instantly back into the solid-state accumulator.
            </p>
            <div className="font-mono text-xs font-bold text-black border-t border-black pt-4">
              RECOVERY EFFICIENCY: 94.2%
            </div>
          </div>

          <div className="md:col-span-7 md:translate-y-12 border-2 border-black p-8 bg-black text-white space-y-6">
            <div className="font-mono text-[10px] text-[#ff2e00] font-bold">MODULE 02 // THERMAL CONTROL</div>
            <h3 className="text-3xl font-black uppercase tracking-tight">LIQUID DIELECTRIC COOLING</h3>
            <p className="font-mono text-xs text-neutral-400 leading-relaxed">
              Proprietary dielectric coolant immersion baths maintain cell temperatures within ±1.5°C during continuous 45-minute endurance heat races.
            </p>
            <div className="font-mono text-xs font-bold text-[#ff2e00] border-t border-neutral-800 pt-4">
              MAX OPERATING TEMP: 65°C
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export function Stat4() {
  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">INVERTED COBALT METRICS</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">High-contrast grid status plate.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[STAT-04 // INVERTED]</span>
        </div>

        <div className="bg-[#2743f0] text-white p-10 md:p-14 rounded-[2px] grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 flex flex-col gap-3 border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 md:pr-8">
            <div className="flex justify-between items-center font-mono text-[10px] text-white/70">
              <span className="uppercase">Grid Stability Index</span>
              <span>[01]</span>
            </div>
            <div className="text-4xl font-semibold font-mono tracking-tight">99.98%</div>
            <div className="font-mono text-[10px] uppercase text-white/80">Nominal phasor synchronization</div>
          </div>

          <div className="relative z-10 flex flex-col gap-3 border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 md:pr-8">
            <div className="flex justify-between items-center font-mono text-[10px] text-white/70">
              <span className="uppercase">Total Power Dispatched</span>
              <span>[02]</span>
            </div>
            <div className="text-4xl font-semibold font-mono tracking-tight">14.2 TW</div>
            <div className="font-mono text-[10px] uppercase text-white/80">Across 1,420 regional substations</div>
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex justify-between items-center font-mono text-[10px] text-white/70">
              <span className="uppercase">Autonomous Actions</span>
              <span>[03]</span>
            </div>
            <div className="text-4xl font-semibold font-mono tracking-tight">4.2M/s</div>
            <div className="font-mono text-[10px] uppercase text-white/80">Zero manual intervention errors</div>
          </div>
        </div>
      </div>
    </section>
  );
}

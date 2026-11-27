import React from 'react';

export function Stat4() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// CONTROL BAR STAT STRIP</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">LIVE TELEMETRY READOUT</h2>
        </div>

        <div className="bg-[#16181d] border border-[#272a33] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#272a33] text-center clip-corner">
          <div className="p-6">
            <span className="font-mono-spec text-[10px] text-neutral-500 block">STATOR TEMP</span>
            <span className="font-mono-spec text-xl font-bold text-white mt-1 block">42.1° <span className="text-[#ff5a1f] text-xs">C</span></span>
          </div>
          <div className="p-6">
            <span className="font-mono-spec text-[10px] text-neutral-500 block">DC BUS VOLTAGE</span>
            <span className="font-mono-spec text-xl font-bold text-white mt-1 block">824 <span className="text-[#ff5a1f] text-xs">V</span></span>
          </div>
          <div className="p-6">
            <span className="font-mono-spec text-[10px] text-neutral-500 block">INVERTER FREQ</span>
            <span className="font-mono-spec text-xl font-bold text-white mt-1 block">18.5 <span className="text-[#ff5a1f] text-xs">KHZ</span></span>
          </div>
          <div className="p-6">
            <span className="font-mono-spec text-[10px] text-neutral-500 block">SYSTEM STATUS</span>
            <span className="font-mono-spec text-xl font-bold text-[#ff5a1f] mt-1 block">NOMINAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export function Testimonials3() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// ASYMMETRIC QUOTE WALL</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          GLOBAL <span className="text-[#ff2e00]">PILOT VERDICTS</span>
        </h2>

        {/* Asymmetric quote wall: one large, several small */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 border-2 border-black p-8 bg-black text-white flex flex-col justify-between">
            <div className="font-mono text-[10px] text-[#ff2e00] mb-4 font-bold">// FEATURED DEBRIEF 01</div>
            <p className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-8">
              "The single most terrifying and exhilarating machine ever homologated for track use."
            </p>
            <div className="font-mono text-xs text-neutral-400">
              — CHIEF TEST DRIVER, SUZUKA CIRCUIT
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-2 border-black p-6 bg-white">
              <div className="font-mono text-[10px] text-neutral-500 mb-2">// 02. TEST PILOT</div>
              <p className="font-mono text-xs text-neutral-800 mb-4">
                "Instant throttle response without vibration fatigue. A masterclass in electric ergonomics."
              </p>
              <div className="font-mono text-[11px] font-bold text-[#ff2e00]">— DAVE MILLER, SUPERBIKE MAG</div>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <div className="font-mono text-[10px] text-neutral-500 mb-2">// 03. ENDURANCE RIDER</div>
              <p className="font-mono text-xs text-neutral-800 mb-4">
                "Pit stops reduced to 8-minute fast charges. The solid state cell tech is bulletproof."
              </p>
              <div className="font-mono text-[11px] font-bold text-[#ff2e00]">— SARAH LINDEN, LE MANS EV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

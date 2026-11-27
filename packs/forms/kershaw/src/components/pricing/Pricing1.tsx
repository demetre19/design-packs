import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Pricing1() {
  const plans = [
    { name: 'TIER 01 // BENCH TEST', price: '$4,500', desc: 'Standard single-rotor dynamometer validation run with basic thermal logs.', highlight: false },
    { name: 'TIER 02 // FLAGSHIP RACE', price: '$12,800', desc: 'Complete multi-axis telemetry mapping, 40 test runs, and custom turbo compressor optimization.', highlight: true },
    { name: 'TIER 03 // FACTORY CELL', price: '$29,000', desc: 'Dedicated dyno cell facility access with resident Kershaw engineers and closed-loop AI calibration.', highlight: false },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 01. PROGRAM ALLOCATION</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            DYNO CELL <span className="text-[#ffd500]">TIER STRUCTURE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`bg-[#14161a] border p-8 flex flex-col justify-between relative ${
                p.highlight ? 'border-[#ffd500] shadow-[0_0_30px_rgba(255,213,0,0.15)] md:-translate-y-4' : 'border-[#262c36]'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffd500] text-black text-[10px] font-extrabold px-3 py-1 uppercase tracking-wider">
                  FLAGSHIP PROGRAM
                </div>
              )}
              <div>
                <span className="text-xs text-zinc-400 block mb-2">{p.name}</span>
                <span className="text-4xl font-black text-white block mb-4">{p.price}</span>
                <p className="text-zinc-400 font-sans text-xs mb-8">{p.desc}</p>
                <ul className="space-y-3 text-xs text-zinc-300 mb-8 font-sans">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ffd500]" /> <span>Multi-channel sensor suite</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ffd500]" /> <span>Real-time oscilloscope feed</span></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ffd500]" /> <span>Certified dyno data report</span></li>
                </ul>
              </div>
              <button
                className={`w-full py-4 text-xs font-extrabold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
                  p.highlight ? 'bg-[#ffd500] text-black hover:bg-[#ffdf33]' : 'bg-[#0c0d0f] border border-[#262c36] text-white hover:border-[#ffd500]'
                }`}
              >
                <span>ALLOCATE CELL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

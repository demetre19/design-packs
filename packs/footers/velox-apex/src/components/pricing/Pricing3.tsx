import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// ASYMMETRIC PRICING STRUCTURE</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          TIER <span className="text-[#ff2e00]">DIVERGENCE</span>
        </h2>

        {/* Asymmetric pricing: big tier left, small tiers stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 border-2 border-black p-8 bg-black text-white flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-[#ff2e00] font-bold mb-2">// 01. FLAGSHIP TRACK PREDATOR</div>
              <h3 className="text-4xl font-black uppercase mb-4">APEX GT-R</h3>
              <div className="text-6xl sm:text-7xl font-black tracking-tighter my-6 text-[#ff2e00]">
                $64,500
              </div>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed mb-8">
                The absolute pinnacle of electric two-wheeled engineering. Includes active downforce aero kit and dual quick-swap solid state battery packs.
              </p>
            </div>
            <button className="bg-[#ff2e00] text-black font-black py-4 uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer">
              <span>SECURE GT-R ALLOCATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">// 02. STREET SPEC</span>
                  <span className="text-2xl font-black">$34,500</span>
                </div>
                <h4 className="font-bold text-lg uppercase mb-2">VX-STREET NAKED</h4>
                <p className="font-mono text-xs text-neutral-600">Optimized for daily urban transit and weekend mountain passes.</p>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">// 03. TRACK KIT UPGRADE</span>
                  <span className="text-2xl font-black">$12,000</span>
                </div>
                <h4 className="font-bold text-lg uppercase mb-2">AERO WINGLET MODULE</h4>
                <p className="font-mono text-xs text-neutral-600">Retrofit carbon fiber downforce foils for existing VX chassis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

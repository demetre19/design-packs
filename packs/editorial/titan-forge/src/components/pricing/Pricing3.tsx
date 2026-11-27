import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          ASYMMETRIC PRICING // SYSTEM 03
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          FLEET <span className="text-[#f25c05]">TIER</span> COMPARISON.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Thin tier left */}
          <div className="lg:col-span-4 border-2 border-black bg-white p-6">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">TIER 01 // BASIC</span>
            <h3 className="font-black text-xl uppercase tracking-tight mb-4">TACTICAL NODE</h3>
            <div className="text-3xl font-black font-mono tracking-tighter mb-6">$4,500 <span className="text-xs text-neutral-500 font-mono">/MO</span></div>
            <ul className="space-y-3 font-mono text-xs mb-8 text-neutral-700">
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5" /><span>Single Excavator</span></li>
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5" /><span>Standard Telemetry</span></li>
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5" /><span>99.5% Uptime</span></li>
            </ul>
            <button className="w-full bg-black text-white py-3 font-mono text-xs font-bold uppercase hover:bg-[#f25c05] hover:text-black transition-colors">
              Select Tier
            </button>
          </div>

          {/* Solid black flagship tier center (wider, prominent) */}
          <div className="lg:col-span-4 border-4 border-black bg-black text-white p-8 relative transform lg:-translate-y-2">
            <div className="absolute -top-3 right-6 bg-[#f25c05] text-black px-3 py-1 font-mono text-[10px] font-bold uppercase">
              FLAGSHIP CHOICE
            </div>
            <span className="font-mono text-[10px] text-[#f25c05] uppercase tracking-widest block mb-2">TIER 02 // OMNI</span>
            <h3 className="font-black text-2xl uppercase tracking-tight mb-4">FLAGSHIP GRID</h3>
            <div className="text-4xl font-black font-mono tracking-tighter text-[#f25c05] mb-6">$14,200 <span className="text-xs text-neutral-400 font-mono">/MO</span></div>
            <ul className="space-y-3 font-mono text-xs mb-8 text-neutral-300">
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-[#f25c05]" /><span>Up to 25 Heavy Units</span></li>
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-[#f25c05]" /><span>Acoustic Stress AI</span></li>
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-[#f25c05]" /><span>0.04ms Fiber Backbone</span></li>
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-[#f25c05]" /><span>24/7 Titan Engineers</span></li>
            </ul>
            <button className="w-full bg-[#f25c05] text-black py-3 font-mono text-xs font-black uppercase hover:bg-white transition-colors flex items-center justify-center space-x-2">
              <span>Deploy Flagship</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Thin tier right */}
          <div className="lg:col-span-4 border-2 border-black bg-white p-6">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">TIER 03 // ENTERPRISE</span>
            <h3 className="font-black text-xl uppercase tracking-tight mb-4">MEGA EXTRACTION</h3>
            <div className="text-3xl font-black font-mono tracking-tighter mb-6">CUSTOM</div>
            <ul className="space-y-3 font-mono text-xs mb-8 text-neutral-700">
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5" /><span>Unlimited Fleet</span></li>
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5" /><span>Dedicated Satellite</span></li>
              <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5" /><span>Absolute Zero-Downtime</span></li>
            </ul>
            <button className="w-full bg-black text-white py-3 font-mono text-xs font-bold uppercase hover:bg-[#f25c05] hover:text-black transition-colors">
              Contact Command
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

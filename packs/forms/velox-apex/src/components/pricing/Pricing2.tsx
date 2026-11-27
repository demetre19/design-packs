import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Pricing2() {
  return (
    <section className="w-full bg-black text-white py-20 border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-3 uppercase">// FLAGSHIP SINGLE ALLOCATION</div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-8">
          APEX FACTORY CUSTOM EDITION
        </h2>

        {/* Single centered massive price */}
        <div className="border-2 border-neutral-800 p-12 bg-neutral-900 relative">
          <div className="absolute top-4 right-4 bg-[#ff2e00] text-black font-mono text-[10px] font-bold px-2 py-1">
            EXCLUSIVE // 10 UNITS
          </div>

          <div className="text-7xl sm:text-9xl font-black tracking-tighter text-white mb-6">
            $89,900
          </div>

          {/* Tiny mono breakdown */}
          <div className="max-w-md mx-auto font-mono text-xs text-neutral-400 space-y-2 border-t border-neutral-800 pt-6 mb-8 text-left">
            <div className="flex justify-between">
              <span>BASE CHASSIS & MOTOR:</span>
              <span className="text-white font-bold">$54,000</span>
            </div>
            <div className="flex justify-between">
              <span>CUSTOM TITANIUM WORK:</span>
              <span className="text-white font-bold">$18,500</span>
            </div>
            <div className="flex justify-between">
              <span>LIFETIME TELEMETRY CLOUD:</span>
              <span className="text-white font-bold">$17,400</span>
            </div>
          </div>

          <button className="bg-[#ff2e00] text-black font-black px-8 py-4 uppercase text-xs tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer">
            <span>INITIATE CUSTOM BUILD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

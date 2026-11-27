import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero3() {
  return (
    <section className="bg-[#f5f4f0] text-black border-b-4 border-black py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-8 md:p-12 relative">
          <div className="absolute -top-3 left-6 bg-black text-white px-3 py-1 font-mono text-[10px] uppercase">
            STEPPED ARCHITECTURE // 03
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-5 space-y-6">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                AUTONOMOUS DRILLING <span className="text-[#f25c05]">REDEFINED</span>.
              </h1>
              <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                Heavy-duty diamond core drilling rigs controlled by decentralized edge clusters. Zero manual intervention required across deep extraction tiers.
              </p>
              <div className="flex items-center space-x-4 font-mono">
                <button className="bg-black text-white px-6 py-3 font-black uppercase text-xs hover:bg-[#f25c05] hover:text-black transition-colors flex items-center space-x-2">
                  <span>Explore Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thick vertical black bar divider */}
            <div className="hidden lg:block lg:col-span-1 h-64 bg-black mx-auto w-2"></div>

            <div className="lg:col-span-6 space-y-4 font-mono">
              <div className="border-2 border-black p-4 bg-[#f5f4f0] flex items-center justify-between">
                <span className="text-xs font-bold uppercase">01 // CORE STABILITY</span>
                <span className="text-[#f25c05] font-black text-sm">99.9%</span>
              </div>
              <div className="border-2 border-black p-4 bg-[#f5f4f0] flex items-center justify-between">
                <span className="text-xs font-bold uppercase">02 // TORQUE OUTPUT</span>
                <span className="text-[#f25c05] font-black text-sm">85,000 NM</span>
              </div>
              <div className="border-2 border-black p-4 bg-[#f5f4f0] flex items-center justify-between">
                <span className="text-xs font-bold uppercase">03 // THERMAL SHIELD</span>
                <span className="text-[#f25c05] font-black text-sm">1,450 °C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

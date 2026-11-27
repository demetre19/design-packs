import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

export function Pricing2() {
  const [billingCycle, setBillingCycle] = useState<'standard' | 'bespoke'>('standard');

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="text-center max-w-2xl mx-auto space-y-6 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">PRICING 02 · BEZEL-STYLE SEGMENTED SELECTOR</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Service Subscriptions</h2>

        {/* Bezel-style segmented selector */}
        <div className="inline-flex p-1 bg-[#1c2128]/10 border border-[#d0d0cc]">
          <button
            onClick={() => setBillingCycle('standard')}
            className={`font-mono text-xs tracking-[0.2em] px-6 py-2 transition-all ${
              billingCycle === 'standard' ? 'bg-[#2e5e8e] text-white shadow-sm' : 'text-[#232a30] hover:text-[#2e5e8e]'
            }`}
          >
            STANDARD CARE
          </button>
          <button
            onClick={() => setBillingCycle('bespoke')}
            className={`font-mono text-xs tracking-[0.2em] px-6 py-2 transition-all ${
              billingCycle === 'bespoke' ? 'bg-[#2e5e8e] text-white shadow-sm' : 'text-[#232a30] hover:text-[#2e5e8e]'
            }`}
          >
            BESPOKE RESTORATION
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white border border-[#d0d0cc] p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-[#d0d0cc] pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#232a30]">Annual Calibration</span>
            <span className="font-mono text-xl text-[#2e5e8e]">{billingCycle === 'standard' ? '$1,200' : '$3,500'}</span>
          </div>
          <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed">
            Complete disassembly, ultrasonic cleansing of all 300+ components, lubrication with synthetic oils, and positional timing adjustment.
          </p>
          <button className="w-full bg-[#1c2128] text-white font-mono text-xs tracking-[0.25em] py-3 hover:bg-[#2e5e8e] transition-colors">
            SELECT SERVICE
          </button>
        </div>

        <div className="bg-white border border-[#d0d0cc] p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-[#d0d0cc] pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#232a30]">Master Restoration</span>
            <span className="font-mono text-xl text-[#2e5e8e]">{billingCycle === 'standard' ? '$4,800' : '$12,000'}</span>
          </div>
          <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed">
            Full case refinishing by master watchmakers, dial restoration, and replacement of worn balance pivots with factory certificates.
          </p>
          <button className="w-full bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] py-3 hover:bg-[#232a30] transition-colors">
            SELECT RESTORATION
          </button>
        </div>
      </div>
    </section>
  );
}

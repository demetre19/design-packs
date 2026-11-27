import React, { useState } from 'react';
import { Check, Shield } from 'lucide-react';

export function Pricing1() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">PRICING 01 · 3-TIER PANELS WITH BLUED-STEEL RING</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Edition Tiers</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "CHRONOMETRY", ref: "REF. 100", price: "$18,500", desc: "Essential 3-hand mechanical precision in brushed stainless steel.", recommended: false },
          { name: "ANNUAL CALENDAR", ref: "REF. 5726", price: "$42,000", desc: "Self-adjusting calendar movement with moon phase indicator.", recommended: true },
          { name: "GRAND COMPLICATION", ref: "REF. 6300", price: "$125,000", desc: "Tourbillon escapement and minute repeater in solid 18k white gold.", recommended: false }
        ].map((tier, idx) => (
          <div
            key={idx}
            className={`bg-white border p-8 flex flex-col justify-between relative transition-all ${
              tier.recommended ? 'border-2 border-[#2e5e8e] shadow-md ring-4 ring-[#2e5e8e]/10' : 'border-[#d0d0cc]'
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2e5e8e] text-white font-mono text-[9px] tracking-[0.25em] px-3 py-1 uppercase">
                RECOMMENDED ATELIER
              </div>
            )}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#2e5e8e] tracking-widest">{tier.ref}</span>
                <Shield className="w-4 h-4 text-[#2e5e8e]" />
              </div>
              <h3 className="text-xl font-light tracking-wide text-[#232a30]">{tier.name}</h3>
              <div className="font-mono text-3xl font-light text-[#232a30] pt-2">{tier.price}</div>
              <p className="font-mono text-xs text-[#232a30]/70 tracking-wider leading-relaxed pt-2">
                {tier.desc}
              </p>
            </div>
            <div className="pt-8">
              <button
                className={`w-full font-mono text-xs tracking-[0.25em] py-3 transition-colors ${
                  tier.recommended
                    ? 'bg-[#2e5e8e] text-white hover:bg-[#232a30]'
                    : 'bg-[#1c2128] text-white hover:bg-[#2e5e8e]'
                }`}
              >
                REQUEST RESERVATION
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Check } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-3xl mx-auto bg-[#13171c] border border-white/10 p-10 flex flex-col items-center text-center">
        <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase mb-3">SINGLE ALL-INCLUSIVE PLAN</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-4">The Aetheris Master Fellowship</h2>
        <p className="font-sans text-xs text-[#7a8494] max-w-md mb-8">
          A single comprehensive tier granting full access to our global vaults, horological allocation lists, and bespoke atelier services.
        </p>

        <div className="font-serif text-5xl text-[#ece8e1] mb-8">
          $10,000 <span className="text-xs font-mono text-[#7a8494]">/ ANNUAL</span>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 border-y border-white/10 py-6">
          <div className="flex items-center gap-3 text-xs text-[#ece8e1]">
            <Check className="w-4 h-4 text-[#d4b06a]" /> Unlimited Vault Allocation
          </div>
          <div className="flex items-center gap-3 text-xs text-[#ece8e1]">
            <Check className="w-4 h-4 text-[#d4b06a]" /> Priority Watch Allocation
          </div>
          <div className="flex items-center gap-3 text-xs text-[#ece8e1]">
            <Check className="w-4 h-4 text-[#d4b06a]" /> Global Salon Access
          </div>
          <div className="flex items-center gap-3 text-xs text-[#ece8e1]">
            <Check className="w-4 h-4 text-[#d4b06a]" /> Dedicated Concierge
          </div>
        </div>

        <button className="px-8 py-3.5 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
          ACQUIRE FELLOWSHIP
        </button>
      </div>
    </section>
  );
}

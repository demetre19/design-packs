import React, { useState } from 'react';
import { Check } from 'lucide-react';

export function Pricing2() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">FLEXIBLE PATRONAGE</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-6">Select Billing Cadence</h2>
          
          {/* Monthly/yearly toggle in hairline pill */}
          <div className="inline-flex items-center p-1 rounded-full border border-white/20 bg-[#13171c]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                !isAnnual ? 'bg-[#d4b06a] text-[#0b0d10]' : 'text-[#7a8494] hover:text-[#ece8e1]'
              }`}
            >
              MONTHLY CUSTODY
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                isAnnual ? 'bg-[#d4b06a] text-[#0b0d10]' : 'text-[#7a8494] hover:text-[#ece8e1]'
              }`}
            >
              ANNUAL PATRONAGE (-15%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#13171c] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#d4b06a] block mb-2">COLLECTOR TIER</span>
              <h3 className="font-serif text-2xl text-[#ece8e1] mb-4">Standard Custody</h3>
              <div className="font-serif text-4xl text-[#ece8e1] mb-4">
                {isAnnual ? '$2,125' : '$250'} <span className="text-xs font-mono text-[#7a8494]">/ {isAnnual ? 'year' : 'month'}</span>
              </div>
              <p className="font-sans text-xs text-[#7a8494] mb-6">For individual collectors managing up to 10 timepieces.</p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-2 text-xs text-[#ece8e1]"><Check className="w-4 h-4 text-[#d4b06a]" /> Biometric vault box</li>
                <li className="flex items-center gap-2 text-xs text-[#ece8e1]"><Check className="w-4 h-4 text-[#d4b06a]" /> Digital ledger passport</li>
                <li className="flex items-center gap-2 text-xs text-[#ece8e1]"><Check className="w-4 h-4 text-[#d4b06a]" /> Annual servicing check</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-full border border-[#d4b06a] text-[#d4b06a] text-xs font-mono hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
              SELECT TIER
            </button>
          </div>

          <div className="bg-[#13171c] border border-2 border-[#d4b06a] p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#d4b06a] block mb-2">INSTITUTIONAL TIER</span>
              <h3 className="font-serif text-2xl text-[#ece8e1] mb-4">Sovereign Vault</h3>
              <div className="font-serif text-4xl text-[#ece8e1] mb-4">
                {isAnnual ? '$6,375' : '$750'} <span className="text-xs font-mono text-[#7a8494]">/ {isAnnual ? 'year' : 'month'}</span>
              </div>
              <p className="font-sans text-xs text-[#7a8494] mb-6">For family offices and elite portfolios with unlimited allocation.</p>
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-2 text-xs text-[#ece8e1]"><Check className="w-4 h-4 text-[#d4b06a]" /> Subterranean strongroom slot</li>
                <li className="flex items-center gap-2 text-xs text-[#ece8e1]"><Check className="w-4 h-4 text-[#d4b06a]" /> Dedicated concierge arm</li>
                <li className="flex items-center gap-2 text-xs text-[#ece8e1]"><Check className="w-4 h-4 text-[#d4b06a]" /> Priority commission access</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-full bg-[#d4b06a] text-[#0b0d10] text-xs font-mono hover:bg-[#ece8e1] transition-all">
              SELECT TIER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

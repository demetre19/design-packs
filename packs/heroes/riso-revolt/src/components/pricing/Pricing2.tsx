import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing2() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
            FLEXIBLE BILLING
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter mb-6">
            SUBSCRIPTION EDITIONS.
          </h2>
          
          {/* Monthly/Yearly toggle */}
          <div className="inline-flex items-center gap-4 bg-white border-2 border-[#111111] p-2 shadow-hard-sm">
            <span className={`font-mono text-xs font-bold ${!annual ? 'bg-[#ffd92e] px-2 py-1 border border-[#111111]' : ''}`}>MONTHLY</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="w-14 h-7 bg-[#111111] border border-[#111111] relative p-1 transition-colors"
            >
              <div className={`w-5 h-5 bg-[#ffd92e] border border-[#111111] transition-transform ${annual ? 'translate-x-7 bg-[#ff6b5e]' : ''}`}></div>
            </button>
            <span className={`font-mono text-xs font-bold ${annual ? 'bg-[#ffd92e] px-2 py-1 border border-[#111111]' : ''}`}>ANNUAL (SAVE 20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-[#ff6b5e] mb-2">// STUDIO TIER</div>
              <h3 className="font-grotesk font-black text-2xl uppercase mb-4">DESIGN SUBSCRIPTION</h3>
              <div className="font-grotesk font-black text-4xl mb-6">
                {annual ? '$790' : '$990'} <span className="font-mono text-sm font-normal">/ month</span>
              </div>
              <ul className="space-y-3 font-mono text-xs mb-8">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>One active design request at a time</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Average 48-hour turnaround</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Source files & riso separations included</span></li>
              </ul>
            </div>
            <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-sm py-3.5 w-full">
              SUBSCRIBE NOW
            </button>
          </div>

          <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-[#111111] mb-2">// PRO TIER</div>
              <h3 className="font-grotesk font-black text-2xl uppercase mb-4">SCALE SUBSCRIPTION</h3>
              <div className="font-grotesk font-black text-4xl mb-6">
                {annual ? '$1,590' : '$1,990'} <span className="font-mono text-sm font-normal">/ month</span>
              </div>
              <ul className="space-y-3 font-mono text-xs mb-8">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#111111]" /><span>Two simultaneous design requests</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#111111]" /><span>Priority 24-hour turnaround</span></li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#111111]" /><span>Dedicated frontend React engineer</span></li>
              </ul>
            </div>
            <button className="btn-brutal bg-[#111111] text-white font-grotesk font-black text-sm py-3.5 w-full">
              SUBSCRIBE PRO ⚡
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing2() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
          Flexible Retainers
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight mb-8">
          Tailored advisory for your practice growth.
        </h2>

        {/* Toggle */}
        <div className="inline-flex items-center bg-[#faf6f0] p-1.5 rounded-full border border-[#122420]/15 mb-16 shadow-sm">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              !isAnnual ? 'bg-[#1d4f47] text-[#faf6f0] shadow-sm' : 'text-[#122420] hover:text-[#2a7a6d]'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isAnnual ? 'bg-[#1d4f47] text-[#faf6f0] shadow-sm' : 'text-[#122420] hover:text-[#2a7a6d]'
            }`}
          >
            Annual Retainer <span className="text-xs text-[#2a7a6d] font-bold ml-1">(Save 20%)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#faf6f0] rounded-[28px] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#122420] mb-2">Clinical Growth Advisory</h3>
              <p className="text-sm text-[#122420]/80 font-light mb-6">For single-practitioner wellness studios seeking ongoing brand & clinical refinement.</p>
              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-[#122420]">{isAnnual ? '$3,200' : '$4,000'}</span>
                <span className="text-xs text-[#122420]/70 ml-2 uppercase tracking-wider">/ month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-[#122420]">
                  <Check className="w-4 h-4 text-[#2a7a6d]" />
                  <span>Monthly brand strategy consultation</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#122420]">
                  <Check className="w-4 h-4 text-[#2a7a6d]" />
                  <span>Patient journey optimization review</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#122420]">
                  <Check className="w-4 h-4 text-[#2a7a6d]" />
                  <span>Longevity content collateral kit</span>
                </li>
              </ul>
            </div>
            <a href="#select" className="w-full py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] text-center text-sm font-medium hover:bg-[#153b34] transition-all flex items-center justify-center gap-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-[#faf6f0] rounded-[28px] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#122420] mb-2">Comprehensive Studio</h3>
              <p className="text-sm text-[#122420]/80 font-light mb-6">For multi-physician clinics scaling their presence and patient experience.</p>
              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-[#122420]">{isAnnual ? '$7,800' : '$9,500'}</span>
                <span className="text-xs text-[#122420]/70 ml-2 uppercase tracking-wider">/ month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-[#122420]">
                  <Check className="w-4 h-4 text-[#2a7a6d]" />
                  <span>Full spatial & brand architecture support</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#122420]">
                  <Check className="w-4 h-4 text-[#2a7a6d]" />
                  <span>Dedicated senior clinical strategist</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#122420]">
                  <Check className="w-4 h-4 text-[#2a7a6d]" />
                  <span>Unlimited patient touchpoint reviews</span>
                </li>
              </ul>
            </div>
            <a href="#select" className="w-full py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] text-center text-sm font-medium hover:bg-[#153b34] transition-all flex items-center justify-center gap-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

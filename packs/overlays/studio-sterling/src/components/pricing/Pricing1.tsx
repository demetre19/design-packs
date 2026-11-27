import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Pricing1() {
  const plans = [
    { title: 'EDITORIAL DIRECTION', rate: '£4,500', period: 'PER ISSUE / PROJECT', desc: 'Complete typographic styling, grid system architecture, and print supervision for monographs and journals.' },
    { title: 'BRAND IDENTITY SYSTEM', rate: '£8,500', period: 'FULL PROGRAM', desc: 'Comprehensive visual identity, bespoke wordmark, guidelines manual, and stationery system for studios.' },
    { title: 'EXHIBITION WAYFINDING', rate: '£12,000', period: 'INSTALLATION', desc: 'Spatial typography, environmental graphics, and signage scheduling for gallery and museum spaces.' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">SERVICE RATE CARDS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">PRICING 01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div key={idx} className="border border-black p-6 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 mb-2">TIER 0{idx + 1}</div>
                <h3 className="font-black text-sm uppercase tracking-tight mb-4">{plan.title}</h3>
                <div className="text-3xl font-black tracking-tighter mb-1">{plan.rate}</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-600 mb-6 pb-4 border-b border-black">{plan.period}</div>
                <p className="text-[11px] leading-tight uppercase tracking-wider text-neutral-800 mb-6">{plan.desc}</p>
              </div>
              <a href="#contact" className="border border-black px-4 py-2 text-center text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1">
                Inquire Service <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

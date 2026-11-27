import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Pricing2() {
  const packages = [
    { name: "Compact Alpine Cabin", area: "120 M²", bedrooms: "2 BD", fee: "$45,000", timeline: "4 Months Design" },
    { name: "Standard Coastal Villa", area: "320 M²", bedrooms: "4 BD", fee: "$95,000", timeline: "7 Months Design" },
    { name: "Estate Master Residence", area: "650 M²", bedrooms: "6 BD", fee: "$180,000", timeline: "12 Months Design" }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">PROJECT-BASED SCHEDULE</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Standardized Scale Packages</h2>
        </div>

        <div className="border border-[#e2e0d8] bg-[#f0efeb] divide-y divide-[#e2e0d8]">
          {packages.map((p, i) => (
            <div key={i} className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#fafaf8] transition-colors">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-stone-500 uppercase">PACKAGE 0{i+1}</span>
                <h3 className="text-xl font-medium text-[#16171a]">{p.name}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-8 text-xs font-mono text-stone-600">
                <div>AREA: <span className="text-[#16171a] font-medium">{p.area}</span></div>
                <div>SCALE: <span className="text-[#16171a] font-medium">{p.bedrooms}</span></div>
                <div>TIMELINE: <span className="text-[#16171a] font-medium">{p.timeline}</span></div>
                <div className="text-base font-medium text-[#b5482e]">{p.fee}</div>
                <a href="#inquire" className="inline-flex items-center space-x-1 text-xs uppercase tracking-wider text-[#16171a] hover:text-[#b5482e]">
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

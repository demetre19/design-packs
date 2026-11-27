import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid4() {
  const items = [
    { num: "01", title: "Master Planning", desc: "Topographic site analysis and master zoning for private estates." },
    { num: "02", title: "Interior Architecture", desc: "Custom monolithic cabinetry, stone hearths, and bespoke lighting registers." },
    { num: "03", title: "Structural Engineering", desc: "Advanced seismic and thermal performance engineered into minimalist forms." },
    { num: "04", title: "Landscape Integration", desc: "Native flora landscaping that merges seamlessly into native forest and coast." }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">PRACTICE SCOPE</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Comprehensive Scope of Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#e2e0d8] bg-[#f0efeb]">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`p-10 border-[#e2e0d8] ${i === 0 ? 'border-b md:border-r md:border-b' : ''} ${i === 1 ? 'border-b md:border-b' : ''} ${i === 2 ? 'border-r border-b md:border-b-0' : ''}`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-stone-400">{item.num}</span>
                <ArrowUpRight className="w-4 h-4 text-[#b5482e]" />
              </div>
              <h3 className="text-xl font-medium text-[#16171a] mb-3">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

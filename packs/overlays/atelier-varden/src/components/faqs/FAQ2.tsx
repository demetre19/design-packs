import React from 'react';

export function FAQ2() {
  const faqs = [
    { q: "Site Selection", a: "We assist clients in evaluating topographic stability, sun paths, and local municipal zoning prior to land acquisition." },
    { q: "General Contracting", a: "For Turnkey commissions, Atelier Varden directly manages construction execution to ensure absolute fidelity to the architectural blueprint." },
    { q: "Material Sourcing", a: "All timber and stone are sourced locally from sustainable alpine quarries and certified northern forests." },
    { q: "Post-Completion Warranty", a: "Every completed residence includes a lifetime structural guarantee and annual architectural patina review." }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">TWO-COLUMN REGISTER</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Commission & Practice Register</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
                <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
                <span className="uppercase">REGISTER 0{i+1}</span>
              </div>
              <h3 className="text-xl font-medium text-[#16171a]">{f.q}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

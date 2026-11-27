import React from 'react';
import { FileText } from 'lucide-react';

export function FAQ3() {
  const items = [
    { num: "01", q: "Zoning & Site Boundary Verification", a: "All coordinates cross-referenced against municipal GIS databases." },
    { num: "02", q: "Structural Steel Grade Specifications", a: "Compliance with ASTM A572 Grade 50 high-strength low-alloy steel." },
    { num: "03", q: "Thermal Insulation U-Value Ratings", a: "Exceeding ASHRAE 90.1 energy efficiency benchmarks." },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">FAQ SECTION // 03</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Numbered Detail Index FAQs</h2>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="border border-white/30 p-6 bg-[#142d48] flex flex-col md:flex-row gap-6 items-start">
              <div className="border border-cyan-300 text-cyan-300 px-3 py-1 font-bold text-sm">
                Q-{item.num}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wide">{item.q}</h3>
                <p className="text-xs text-cyan-100 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

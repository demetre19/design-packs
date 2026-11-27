import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FeatureGrid2() {
  const rows = [
    { num: "01", name: "Villa Varden Nord", location: "Zürichberg, CH", area: "380 M²", year: "2025" },
    { num: "02", name: "Engadin Stone Pavilion", location: "St. Moritz, CH", area: "240 M²", year: "2025" },
    { num: "03", name: "Kamakura Horizon House", location: "Kanagawa, JP", area: "410 M²", year: "2024" },
    { num: "04", name: "Stockholm Archipelago Studio", location: "Värmdö, SE", area: "290 M²", year: "2024" }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">SELECTED WORKS REGISTER</span>
        </div>
        <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Completed Residences</h2>

        <div className="border border-[#e2e0d8] bg-[#f0efeb] divide-y divide-[#e2e0d8]">
          {rows.map((r, i) => (
            <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#fafaf8] transition-colors cursor-pointer group">
              <div className="flex items-center space-x-6">
                <span className="text-xs font-mono text-stone-400">{r.num}</span>
                <span className="text-lg font-medium text-[#16171a] group-hover:text-[#b5482e] transition-colors">{r.name}</span>
              </div>
              <div className="flex items-center space-x-8 text-xs font-mono text-stone-600">
                <span>{r.location}</span>
                <span className="hidden sm:inline">{r.area}</span>
                <span className="hidden sm:inline">{r.year}</span>
                <ArrowRight className="w-4 h-4 text-[#b5482e] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

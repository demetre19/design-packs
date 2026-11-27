import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard1() {
  const projects = [
    { dates: '2025–2026', title: 'Tate Modern Wayfinding & Spatial Identity', category: 'EXHIBITION ARCHITECTURE', desc: 'Comprehensive typographic overhaul for the permanent galleries.' },
    { dates: '2024–2025', title: 'Vitra Design Monograph: Concrete & Void', category: 'EDITORIAL PUBLICATION', desc: '320-page hardcover volume exploring Brutalist housing.' },
    { dates: '2023–2024', title: 'Serpentine Pavilion Visual System', category: 'BRAND IDENTITY', desc: 'Dynamic identity system and print collateral suite.' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">SELECTED PROJECTS & MONOGRAPHS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">BLOG 01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="border border-black p-5 flex flex-col justify-between bg-white hover:bg-neutral-50 transition-colors">
              <div>
                <div className="flex justify-between items-center mb-3 text-[10px] font-bold tracking-widest border-b border-black pb-2">
                  <span>{p.dates}</span>
                  <span>{p.category}</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-tight mb-3">{p.title}</h3>
                <p className="text-[11px] uppercase tracking-wider text-neutral-700 leading-tight mb-6">{p.desc}</p>
              </div>
              <div className="pt-4 border-t border-black flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                <span>VIEW SPEC</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard2() {
  const articles = [
    { title: 'Anatomy of a Glyph: Stem Calibration and Overlaps', cat: 'TECHNICAL SPECIFICATION' },
    { title: 'Monochrome Constraints in High-End Digital Branding', cat: 'DESIGN THEORY' },
    { title: 'The OpenType Feature Handbook for Frontend Engineers', cat: 'ENGINEERING' },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Blog 02 // Index List with Huge Numerals</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Curated Journal Index</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">SERIALIZED ENTRIES</span>
        </div>

        <div className="space-y-6">
          {articles.map((art, idx) => (
            <div key={idx} className="border border-neutral-800 bg-neutral-950 p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-neutral-900/40 transition-colors">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-6xl font-black text-neutral-700">0{idx + 1}</span>
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">{art.cat}</span>
                  <h3 className="text-2xl font-normal text-white tracking-tight">{art.title}</h3>
                </div>
              </div>
              <button className="self-start md:self-center border border-neutral-700 px-4 py-2 text-xs font-mono text-white hover:bg-neutral-800">
                Read Dispatch →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

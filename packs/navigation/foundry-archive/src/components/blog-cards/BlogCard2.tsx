import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

export function BlogCard2() {
  const items = [
    { year: "1957", title: "The Basel Typography Symposium", category: "Symposium Record" },
    { year: "1961", title: "Paris Punchcutter Registry", category: "Historical Monograph" },
    { year: "1983", title: "Digital Type Conversion Standard", category: "Technical Paper" }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. TIMELINE LIST LAYOUT</h2>
          <span className="text-xs text-neutral-500">CHRONOLOGICAL INDEX</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 divide-y divide-neutral-800">
          {items.map((item, i) => (
            <div key={i} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                <span className="text-2xl font-bold text-white">{item.year}</span>
                <div>
                  <h3 className="text-sm font-serif font-bold text-neutral-200">{item.title}</h3>
                  <span className="text-[10px] text-neutral-500 uppercase">{item.category}</span>
                </div>
              </div>
              <button className="border border-neutral-700 text-xs px-4 py-2 hover:bg-neutral-800 text-neutral-300">
                VIEW DOSSIER
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

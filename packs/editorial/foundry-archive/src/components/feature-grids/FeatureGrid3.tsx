import React from 'react';
import { Layers, Shield, FileText, Compass } from 'lucide-react';

export function FeatureGrid3() {
  const items = [
    { ref: "REF-01", title: "Copperplate Strikes", count: "142 Plates" },
    { ref: "REF-02", title: "Wooden Signage Blocks", count: "64 Pieces" },
    { ref: "REF-03", title: "Lead Matrix Strikes", count: "512 Casts" },
    { ref: "REF-04", title: "Foundry Specimen Books", count: "18 Volumes" }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. COLLECTION ARCHIVE GRID</h2>
          <span className="text-xs text-neutral-500">VAULT INVENTORY</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-6">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-white border border-neutral-700 px-2 py-0.5">{item.ref}</span>
                <span className="text-[10px] text-neutral-500">{item.count}</span>
              </div>
              <h3 className="text-base font-serif font-bold text-neutral-200 mb-3">{item.title}</h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Cataloged and digitized under strict museum preservation guidelines. Access restricted to accredited typographers and fellows.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

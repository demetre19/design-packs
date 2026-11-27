import React from 'react';
import { Layers, Shield, FileText, Compass } from 'lucide-react';

export function FeatureGrid2() {
  const designers = [
    { name: "GIAMBATTISTA BODONI", role: "Parma Master", era: "1740–1813" },
    { name: "JAN TSCHICHOLD", role: "Basel Reformer", era: "1902–1974" },
    { name: "ADRIAN FRUTIGER", role: "Paris Rationalist", era: "1928–2015" },
    { name: "ELIZABETH Friedlaender", role: "London Punchcutter", era: "1903–1984" }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. DESIGNER BIOGRAPHY GRID</h2>
          <span className="text-xs text-neutral-500">MASTERS & PUNCHCUTTERS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designers.map((d, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] text-neutral-500 uppercase mb-2">{d.era}</div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">{d.name}</h3>
                <div className="text-xs text-neutral-400 font-sans mb-4">{d.role}</div>
                <div className="bg-neutral-900 p-3 border border-neutral-800 text-[11px] text-neutral-400 font-sans">
                  Archival records confirm primary attribution of master punches preserved in Cabinet 12.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-[10px] text-neutral-500 flex justify-between">
                <span>DOSSIER #{88 + i}</span>
                <span className="[writing-mode:vertical-rl] rotate-180 text-[8px] text-neutral-600">ARCHIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. DOCUMENTARY PLATE WITH ARCHIVAL CAPTION</h2>
          <span className="text-xs text-neutral-500">PLATE 12-A</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8">
          <div className="bg-neutral-900 border border-neutral-800 h-64 flex flex-col items-center justify-center text-neutral-600 mb-4">
            <ImageIcon className="w-8 h-8 mb-2" />
            <span className="text-xs font-mono uppercase">ARCHIVAL PLATE SCAN // 1200 DPI</span>
          </div>
          <div className="flex justify-between items-start text-xs">
            <div>
              <h3 className="font-serif font-bold text-white text-base">Original Steel Punch Strike (Parma, 1790)</h3>
              <p className="text-neutral-400 font-sans mt-1">Preserved in the Biblioteca Palatina collection, scanned during the 1957 Basel restoration project.</p>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono">FIG. 01</span>
          </div>
        </div>
      </div>
    </section>
  );
}

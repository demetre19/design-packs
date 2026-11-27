import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

export function Modal2() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">02. ACQUISITION LICENSE MODAL</h2>
          <span className="text-xs text-neutral-500">LICENSE AGREEMENT</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 max-w-2xl mx-auto">
          <div className="flex justify-between items-start mb-6 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase">LICENSE AGREEMENT #883</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">Studio Professional License</h3>
            </div>
            <button className="text-neutral-400 p-1 border border-neutral-800"><X className="w-4 h-4" /></button>
          </div>
          <div className="text-xs text-neutral-400 font-sans mb-6 space-y-3">
            <p>By acquiring this license, your studio is granted the right to install Bodoni Époque across up to 10 workstations and embed WOFF2 files for commercial web publishing.</p>
            <div className="border-t border-neutral-800 pt-3 font-mono text-white font-bold">TOTAL FEE: $180.00 (ONE-TIME)</div>
          </div>
          <div className="flex justify-end space-x-4 text-xs">
            <button className="border border-neutral-700 px-4 py-2 text-neutral-300">DECLINE</button>
            <button className="bg-white text-neutral-900 px-6 py-2 font-bold">CONFIRM ACQUISITION</button>
          </div>
        </div>
      </div>
    </section>
  );
}

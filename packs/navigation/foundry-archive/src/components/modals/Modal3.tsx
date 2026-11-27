import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

export function Modal3() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">03. VISIT CONFIRMATION MUSEUM TICKET</h2>
          <span className="text-xs text-neutral-500">TICKET PASS</span>
        </div>
        <div className="bg-neutral-950 border border-neutral-800 p-8 max-w-xl mx-auto">
          <div className="border border-dashed border-neutral-700 p-6 bg-neutral-900">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest">ADMISSION PASS // BASEL VAULT</span>
              <span className="text-xs font-bold text-white">NO. 00418</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Museum of Metal Type Reading Room</h3>
            <div className="text-xs text-neutral-400 space-y-1 font-mono mb-6">
              <div>HOLDER: DR. ELEANOR VANCE</div>
              <div>DATE: 14 OCTOBER 2026 — 14:00 CET</div>
              <div>CABINET: 12 (PUNCHCUTTER STRIKES)</div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-neutral-500 pt-4 border-t border-neutral-800">
              <span>AUTHORIZED BY CURATOR</span>
              <span>VALID FOR SINGLE ENTRY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { X } from 'lucide-react';

export function Modal2() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-2xl mx-auto border border-black bg-white p-6 md:p-8">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">REFERENCE DOSSIER // 02</span>
            <h3 className="text-xl font-black uppercase tracking-tighter">ACADEMIC ENDORSEMENT</h3>
          </div>
          <button className="border border-black p-1 hover:bg-black hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4 text-xs uppercase tracking-wider mb-6">
          <div className="p-4 border border-black bg-neutral-50">
            <p className="italic leading-relaxed mb-4">
              "Marcus Sterling's master's thesis at RCA set a new benchmark for typographic scholarship. His command of micro-spacing and grid architecture remains unmatched among contemporaries."
            </p>
            <div className="font-bold">— Prof. Beatrix von Haller, ETH Zurich</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[11px]">
            <div className="border border-black p-3">
              <span className="text-neutral-500 block">VERIFIED BY</span>
              <span className="font-bold">Academic Board</span>
            </div>
            <div className="border border-black p-3">
              <span className="text-neutral-500 block">DATE ISSUED</span>
              <span className="font-bold">June 2014</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-black text-white py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800">
          Acknowledge & Close
        </button>
      </div>
    </section>
  );
}

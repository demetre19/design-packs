import React, { useState } from 'react';
import { X, Sliders, FileText } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="w-full bg-[#1b3a5c] text-white py-12 px-6 text-center font-mono border-b border-white/25">
        <button onClick={() => setIsOpen(true)} className="border border-cyan-300 bg-cyan-400 text-[#1b3a5c] px-6 py-3 font-bold text-xs uppercase cursor-pointer hover:bg-white transition-colors">
          OPEN SLIDE-OVER SPEC PANEL [03]
        </button>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono relative">
      <div className="max-w-xl mx-auto border-2 border-white/40 p-6 bg-[#142d48] relative shadow-2xl">
        <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-4">
          <span className="text-xs text-cyan-300">SLIDE-OVER SPEC PANEL // MD-03</span>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-300 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          <h3 className="text-lg font-bold uppercase">Specification Parameters</h3>
          <div className="space-y-2 divide-y divide-white/10">
            <div className="flex justify-between pt-2"><span>MATERIAL GRADE:</span><span className="text-cyan-300">A572 GRADE 50 STEEL</span></div>
            <div className="flex justify-between pt-2"><span>CONCRETE STRENGTH:</span><span className="text-cyan-300">8,000 PSI FC</span></div>
            <div className="flex justify-between pt-2"><span>SEISMIC ZONE:</span><span className="text-cyan-300">ZONE 4 (HIGH RISK)</span></div>
            <div className="flex justify-between pt-2"><span>CURTAIN WALL:</span><span className="text-cyan-300">TRIPLE GLAZED LOW-E</span></div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/25 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="border border-cyan-400 bg-cyan-400 text-[#1b3a5c] px-6 py-2.5 font-bold uppercase hover:bg-white transition-colors cursor-pointer">
            CLOSE PANEL
          </button>
        </div>
      </div>
    </section>
  );
}

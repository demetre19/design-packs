import React, { useState } from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="w-full bg-[#1b3a5c] text-white py-12 px-6 text-center font-mono border-b border-white/25">
        <button onClick={() => setIsOpen(true)} className="border border-cyan-300 bg-cyan-400 text-[#1b3a5c] px-6 py-3 font-bold text-xs uppercase cursor-pointer hover:bg-white transition-colors">
          OPEN DIALOG MODAL [01]
        </button>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-xl mx-auto border-2 border-white/40 p-6 bg-[#142d48] relative shadow-2xl">
        <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-4">
          <span className="text-xs text-cyan-300">DIALOG MODAL // MD-01</span>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-300 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          <h3 className="text-lg font-bold uppercase tracking-tight">Structural Modification Notice</h3>
          <p className="text-cyan-100 leading-relaxed">
            You are about to authorize revision 04 of the structural core matrix. All caisson load calculations have been verified against seismic standards.
          </p>
          <div className="border border-white/20 p-3 bg-[#11263d] space-y-2">
            <div className="flex justify-between"><span>TOLERANCE:</span><span className="text-cyan-300">±0.5MM</span></div>
            <div className="flex justify-between"><span>STATUS:</span><span className="text-cyan-300">PENDING APPROVAL</span></div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/20 flex gap-4">
          <button onClick={() => setIsOpen(false)} className="flex-1 border border-cyan-400 bg-cyan-400 text-[#1b3a5c] py-2.5 font-bold uppercase hover:bg-white transition-colors cursor-pointer">
            CONFIRM & APPROVE
          </button>
          <button onClick={() => setIsOpen(false)} className="border border-white/40 px-4 py-2.5 uppercase hover:bg-white/10 transition-colors cursor-pointer">
            DISMISS
          </button>
        </div>
      </div>
    </section>
  );
}

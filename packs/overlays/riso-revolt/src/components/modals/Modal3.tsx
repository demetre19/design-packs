import React, { useState } from 'react';
import { X, ArrowRight, Terminal } from 'lucide-react';

export default function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111] text-center">
        <button onClick={() => setIsOpen(true)} className="btn-brutal bg-[#111111] text-[#ffd92e] font-grotesk font-black text-sm px-6 py-3">
          OPEN SLIDE-OVER [03]
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-md mx-auto bg-white border-3 border-[#111111] shadow-hard-xl p-6 relative">
        <div className="flex items-center justify-between pb-4 border-b-2 border-[#111111] mb-6">
          <div className="flex items-center gap-2 font-mono text-xs font-black">
            <Terminal size={16} />
            <span>SLIDE-OVER PANEL // SPEC 03</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-[#ffd92e] border border-[#111111]">
            <X size={16} />
          </button>
        </div>

        <div className="space-y-4 font-mono text-xs mb-8">
          <div className="flex justify-between p-2.5 bg-[#fffdf5] border border-[#111111]">
            <span className="font-bold">EDITION ID:</span>
            <span>#RISO-2026-09</span>
          </div>
          <div className="flex justify-between p-2.5 bg-[#fffdf5] border border-[#111111]">
            <span className="font-bold">PAPER STOCK:</span>
            <span>300GSM ARCHIVAL</span>
          </div>
          <div className="flex justify-between p-2.5 bg-[#fffdf5] border border-[#111111]">
            <span className="font-bold">INK TOLERANCE:</span>
            <span>±0.01MM</span>
          </div>
        </div>

        <button onClick={() => setIsOpen(false)} className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-xs py-3 w-full">
          CLOSE PANEL
        </button>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function Modal2() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111] text-center">
        <button onClick={() => setIsOpen(true)} className="btn-brutal bg-[#ff6b5e] text-white font-grotesk font-black text-sm px-6 py-3">
          OPEN CONFIRM MODAL [02]
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-md mx-auto bg-[#ffd92e] border-3 border-[#111111] shadow-hard-xl p-6 relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#ff6b5e] border-2 border-[#111111] text-white shadow-hard-sm">
            <AlertTriangle size={20} />
          </div>
          <div>
            <div className="font-mono text-[10px] font-black uppercase">// CONFIRM ACTION</div>
            <h3 className="font-grotesk font-black text-xl uppercase">OVERWRITE SYSTEM SPEC?</h3>
          </div>
        </div>

        <p className="font-mono text-xs text-[#111111]/80 mb-6 leading-relaxed">
          This action will overwrite existing risograph ink configurations and reset color separations to default state.
        </p>

        <div className="grid grid-cols-2 gap-3 font-grotesk font-black text-xs">
          <button onClick={() => setIsOpen(false)} className="btn-brutal bg-white text-[#111111] py-3">
            CANCEL
          </button>
          <button onClick={() => setIsOpen(false)} className="btn-brutal bg-[#ff6b5e] text-white py-3">
            PROCEED ⚡
          </button>
        </div>
      </div>
    </section>
  );
}

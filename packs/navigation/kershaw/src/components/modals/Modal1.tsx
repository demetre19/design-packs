import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono text-center">
        <button onClick={() => setIsOpen(true)} className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3 uppercase tracking-wider">
          RE-OPEN MODAL DIALOG
        </button>
      </section>
    );
  }

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono relative">
      <div className="max-w-md mx-auto bg-[#14161a] border border-[#ffd500] p-6 relative shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#22262f] mb-4">
          <div className="flex items-center gap-2 text-[#ffd500]">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-extrabold uppercase">EMERGENCY SHUTDOWN PROTOCOL</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-zinc-300 font-sans text-xs mb-6">
          High oil temperature warning detected on Cell 04 (94.2°C). Initiate emergency rotor deceleration sequence?
        </p>
        <div className="flex gap-4">
          <button onClick={() => setIsOpen(false)} className="flex-1 bg-[#ffd500] text-black font-extrabold text-xs py-3 uppercase tracking-wider hover:bg-[#ffdf33]">
            EXECUTE STOP
          </button>
          <button onClick={() => setIsOpen(false)} className="flex-1 bg-[#0c0d0f] border border-[#262c36] text-white font-bold text-xs py-3 uppercase tracking-wider hover:border-[#ffd500]">
            DISMISS
          </button>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { X, ArrowRight, Zap } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="py-20 bg-[#101114] border-b border-[#272a33] text-center">
        <button onClick={() => setIsOpen(true)} className="bg-[#ff5a1f] text-black font-extrabold text-xs px-6 py-3 clip-corner cursor-pointer">
          OPEN DIALOG MODAL
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] flex items-center justify-center">
      <div className="bg-[#16181d] border border-[#272a33] p-8 clip-corner-lg max-w-lg w-full relative shadow-2xl">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-white cursor-pointer">
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-[#ff5a1f] clip-corner flex items-center justify-center text-black font-bold">
            <Zap size={16} />
          </div>
          <span className="font-mono-spec text-xs text-[#ff5a1f]">SYSTEM VERIFICATION</span>
        </div>

        <h3 className="font-display font-extrabold text-2xl text-white mb-3">CONFIRM TELEMETRY ACCESS</h3>
        <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed mb-6">
          By proceeding, you authorize live dyno telemetry streaming and firmware updates directly to your registered APEX machine.
        </p>

        <div className="flex gap-4">
          <button onClick={() => setIsOpen(false)} className="flex-1 bg-[#ff5a1f] text-black font-extrabold text-xs py-3 clip-corner hover:bg-white transition-colors cursor-pointer">
            AUTHORIZE
          </button>
          <button onClick={() => setIsOpen(false)} className="flex-1 bg-transparent border border-[#272a33] text-white font-mono-spec text-xs py-3 clip-corner hover:border-[#ff5a1f] transition-colors cursor-pointer">
            DISMISS
          </button>
        </div>
      </div>
    </section>
  );
}

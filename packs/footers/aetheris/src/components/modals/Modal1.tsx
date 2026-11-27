import React, { useState } from 'react';
import { X } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 flex flex-col items-center justify-center min-h-[500px]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all"
        >
          OPEN DIALOG MODAL
        </button>
      )}

      {isOpen && (
        <div className="w-full max-w-lg bg-[#13171c] border border-white/20 p-8 relative shadow-2xl">
          {/* Gold corner frame */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4b06a]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4b06a]" />

          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono text-[#d4b06a] tracking-widest">DIALOG // DOSSIER 01</span>
            <button onClick={() => setIsOpen(false)} className="text-[#ece8e1] hover:text-[#d4b06a]">
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="font-serif text-2xl text-[#ece8e1] mb-3">Confidential Dossier Access</h3>
          <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-8">
            Accessing this technical specification requires encrypted biometric authentication and active patron credentials.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 py-3 bg-[#d4b06a] text-[#0b0d10] text-xs font-mono tracking-widest hover:bg-[#ece8e1] transition-all"
            >
              AUTHENTICATE
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 border border-white/20 text-[#ece8e1] text-xs font-mono tracking-widest hover:border-white/60 transition-all"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

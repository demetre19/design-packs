import React, { useState } from 'react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 flex flex-col items-center justify-center min-h-[500px]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all"
        >
          OPEN CONFIRM MODAL
        </button>
      )}

      {isOpen && (
        <div className="w-full max-w-md bg-[#13171c] border border-white/20 p-8 shadow-2xl">
          <span className="text-[10px] font-mono text-[#d4b06a] tracking-widest block mb-2">VAULT TRANSFER // CONFIRMATION</span>
          <h3 className="font-serif text-xl text-[#ece8e1] mb-3">Authorize Asset Transfer</h3>
          <p className="font-sans text-xs text-[#7a8494] mb-8">
            Are you certain you wish to initiate the physical transfer of Ref. 884 to the Geneva Strongroom?
          </p>
          <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)} className="flex-1 py-3 border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
              CONFIRM TRANSFER
            </button>
            <button onClick={() => setIsOpen(false)} className="px-5 py-3 border border-white/20 text-[#ece8e1] text-xs font-mono tracking-widest hover:border-white/60 transition-all">
              CANCEL
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

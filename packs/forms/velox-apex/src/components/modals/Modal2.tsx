import React, { useState } from 'react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black flex flex-col items-center justify-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-6 py-3 font-black uppercase text-xs tracking-wider hover:bg-[#ff2e00] hover:text-black transition-colors cursor-pointer mb-8"
      >
        OPEN CONFIRMATION DIALOG [02]
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black border-2 border-black max-w-lg w-full p-8 shadow-2xl">
            <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// CONFIRMATION PROMPT</div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">
              OVERRIDE SPEED GOVERNOR?
            </h3>
            <p className="font-mono text-xs text-neutral-600 mb-8">
              Enabling unrestricted track mode removes speed limiters. Racing license verification required.
            </p>

            {/* Scale-contrast choice (large yes, small no) */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full sm:flex-2 bg-[#ff2e00] text-black font-black py-5 uppercase text-lg tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                YES // ENABLE UNRESTRICTED TRACK MODE
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full sm:flex-1 border border-black py-3 font-mono text-[10px] uppercase text-neutral-500 hover:text-black transition-colors cursor-pointer"
              >
                NO // CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

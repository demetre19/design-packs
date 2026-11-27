import React, { useState } from 'react';
import { X } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 flex flex-col items-center justify-center min-h-[500px]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 border border-[#d4b06a] text-[#d4b06a] text-xs font-mono tracking-widest hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all"
        >
          OPEN SLIDE-OVER PANEL
        </button>
      )}

      {isOpen && (
        <div className="w-full max-w-md bg-[#13171c] border-l border-white/20 p-8 shadow-2xl relative min-h-[400px] flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono text-[#d4b06a]">SLIDE-OVER // SPECIFICATION PANEL</span>
              <button onClick={() => setIsOpen(false)} className="text-[#ece8e1] hover:text-[#d4b06a]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-serif text-xl text-[#ece8e1] mb-6">Caliber ATH-9901 Details</h3>
            <div className="flex flex-col gap-4 text-xs font-mono">
              <div className="flex justify-between pb-3 border-b border-white/10">
                <span className="text-[#7a8494]">JEWELS</span>
                <span className="text-[#ece8e1]">42 RUBIES</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-white/10">
                <span className="text-[#7a8494]">FREQUENCY</span>
                <span className="text-[#ece8e1]">21,600 VPH</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-white/10">
                <span className="text-[#7a8494]">RESERVE</span>
                <span className="text-[#ece8e1]">120 HOURS</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-full py-3 bg-[#d4b06a] text-[#0b0d10] text-xs font-mono tracking-widest hover:bg-[#ece8e1] transition-all mt-8">
            CLOSE PANEL
          </button>
        </div>
      )}
    </section>
  );
}

import React, { useState } from 'react';
import { X, Sliders } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc] text-center space-y-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">MODAL 03 · SLIDE-OVER WITH RULED SPECIFICATION ROWS</div>
      <button
        onClick={() => setIsOpen(true)}
        className="border border-[#232a30] text-[#232a30] font-mono text-xs tracking-[0.25em] px-8 py-3 hover:border-[#2e5e8e] hover:text-[#2e5e8e] transition-colors"
      >
        OPEN SLIDE-OVER SPECIFICATION
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-end z-50">
          <div className="bg-[#1c2128] text-white w-full max-w-md h-full p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-[#2e5e8e] tracking-[0.3em]">SLIDE-OVER DOSSIER</span>
                <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#2e5e8e]">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="py-3 border-b border-white/10 flex justify-between">
                  <span className="text-white/50">CALIBRE</span>
                  <span>CAL. 320 MANUFACTURE</span>
                </div>
                <div className="py-3 border-b border-white/10 flex justify-between">
                  <span className="text-white/50">JEWELS</span>
                  <span>29 RUBIES</span>
                </div>
                <div className="py-3 border-b border-white/10 flex justify-between">
                  <span className="text-white/50">POWER RESERVE</span>
                  <span>48 HOURS</span>
                </div>
                <div className="py-3 border-b border-white/10 flex justify-between">
                  <span className="text-white/50">FREQUENCY</span>
                  <span>28,800 VPH</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-full bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] py-3.5 hover:bg-white hover:text-[#232a30]">
              CLOSE DOSSIER
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

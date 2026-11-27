import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc] text-center space-y-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">MODAL 02 · CONFIRM WITH TWO QUIET ACTIONS</div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#1c2128] text-white font-mono text-xs tracking-[0.25em] px-8 py-3 hover:bg-[#2e5e8e] transition-colors"
      >
        OPEN CONFIRMATION MODAL
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-[#d0d0cc] max-w-md w-full p-8 text-left space-y-6 shadow-xl relative">
            <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">REF. CONFIRMATION 02</div>
            <h3 className="text-xl font-light tracking-wide text-[#232a30]">Authorize Annual Calibration?</h3>
            <p className="font-mono text-xs text-[#232a30]/70 tracking-wider">
              This will queue your timepiece for ultrasonic cleansing and thermal regulation.
            </p>
            <div className="flex space-x-4 pt-4">
              <button onClick={() => setIsOpen(false)} className="flex-1 border border-[#d0d0cc] font-mono text-xs tracking-[0.2em] py-3 hover:border-[#2e5e8e]">
                CANCEL
              </button>
              <button onClick={() => setIsOpen(false)} className="flex-1 bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.2em] py-3 hover:bg-[#232a30]">
                PROCEED
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

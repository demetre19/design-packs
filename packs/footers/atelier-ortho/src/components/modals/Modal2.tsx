import React, { useState } from 'react';
import { CheckSquare, X } from 'lucide-react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  if (!isOpen) {
    return (
      <div className="w-full paper-bg text-[#1b3a5c] py-12 px-6 text-center font-mono border-b border-[#1b3a5c]/30 paper-grid-bg">
        <button onClick={() => setIsOpen(true)} className="bg-[#1b3a5c] text-white px-6 py-3 font-bold text-xs uppercase cursor-pointer hover:bg-[#254e7a] transition-colors">
          OPEN APPROVAL MODAL [02] {status && `(${status})`}
        </button>
      </div>
    );
  }

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-xl mx-auto border-2 border-[#1b3a5c] p-6 bg-white shadow-2xl relative space-y-6">
        <div className="flex justify-between items-center border-b-2 border-[#1b3a5c] pb-3">
          <span className="text-xs font-bold">APPROVAL STAMP MODAL // MD-02</span>
          <button onClick={() => setIsOpen(false)} className="hover:opacity-75 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <h3 className="text-lg font-bold uppercase">Select Official Drawing Verdict</h3>
          <p className="text-[#1b3a5c]/80">Please designate the official architectural status for drawing package AO-2026-X.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <button
            onClick={() => { setStatus('APPROVED'); setIsOpen(false); }}
            className="border-2 border-emerald-700 bg-emerald-50 text-emerald-800 p-4 font-bold text-xs uppercase hover:bg-emerald-100 transition-colors cursor-pointer text-center"
          >
            [X] APPROVED FOR CONSTRUCTION
          </button>
          <button
            onClick={() => { setStatus('REJECTED'); setIsOpen(false); }}
            className="border-2 border-red-700 bg-red-50 text-red-800 p-4 font-bold text-xs uppercase hover:bg-red-100 transition-colors cursor-pointer text-center"
          >
            [ ] REVISED RESUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}

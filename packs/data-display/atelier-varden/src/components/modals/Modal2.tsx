import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#fafaf8] py-16 border-b border-[#e2e0d8] text-center font-sans">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#b5482e] text-[#fafaf8] px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25]"
        >
          Open Confirmation Dialog
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#fafaf8] py-16 border-b border-[#e2e0d8] font-sans flex justify-center px-6">
      <div className="w-full max-w-md bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-6 shadow-none">
        <div className="flex items-center space-x-2 pb-3 border-b border-[#e2e0d8]">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">SITE VISIT CONFIRMATION</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-medium text-[#16171a]">Confirm Topographic Survey Date</h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            You have selected November 28, 2026 for the senior architect site visit in Zürichberg. Please confirm dispatch.
          </p>
        </div>

        <div className="pt-4 border-t border-[#e2e0d8] grid grid-cols-2 gap-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-xs font-mono uppercase tracking-widest text-stone-600 border border-[#e2e0d8] hover:border-[#16171a]"
          >
            Cancel
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-[#b5482e] text-[#fafaf8] text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25]"
          >
            Confirm Visit
          </button>
        </div>
      </div>
    </section>
  );
}

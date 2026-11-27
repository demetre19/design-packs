import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#fafaf8] py-16 border-b border-[#e2e0d8] text-center font-sans">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#b5482e] text-[#fafaf8] px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25]"
        >
          Open Monograph Dialog
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#fafaf8] py-16 border-b border-[#e2e0d8] font-sans flex justify-center px-6">
      <div className="w-full max-w-xl bg-[#f0efeb] border border-[#e2e0d8] p-8 space-y-6 relative shadow-none">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-stone-500 hover:text-[#16171a]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 pb-4 border-b border-[#e2e0d8]">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">COMMISSION BRIEF DIALOG</span>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-medium text-[#16171a]">Request Monograph Portfolio</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Enter your details to receive our bound 2026 architectural monograph featuring unbuilt and completed residential works.
          </p>
          <div className="space-y-3 pt-2">
            <input 
              type="email" 
              placeholder="Enter your electronic mail..." 
              className="w-full bg-[#fafaf8] border border-[#e2e0d8] p-3 text-xs font-mono text-[#16171a] focus:outline-none focus:border-[#b5482e]"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#e2e0d8] flex justify-end space-x-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-stone-600 border border-[#e2e0d8] hover:border-[#16171a]"
          >
            Dismiss
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="px-6 py-2.5 bg-[#b5482e] text-[#fafaf8] text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] flex items-center space-x-2"
          >
            <span>Request Dispatch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

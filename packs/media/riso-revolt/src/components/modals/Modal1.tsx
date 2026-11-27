import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111] text-center">
        <button onClick={() => setIsOpen(true)} className="btn-brutal bg-[#ffd92e] font-grotesk font-black text-sm px-6 py-3">
          OPEN DIALOG MODAL [01]
        </button>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-md mx-auto bg-white border-3 border-[#111111] shadow-hard-xl p-6 relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1.5 bg-[#ff6b5e] text-white border-2 border-[#111111] shadow-hard-sm hover:translate-y-0.5 transition-transform"
        >
          <X size={16} strokeWidth={3} />
        </button>

        <div className="font-mono text-[10px] font-bold text-[#ff6b5e] mb-1">// DIALOG SYSTEM 01</div>
        <h3 className="font-grotesk font-black text-2xl uppercase mb-4">REQUEST PROTOTYPE</h3>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-3 font-mono text-xs">
          <div>
            <label className="block font-bold mb-1">YOUR NAME</label>
            <input type="text" placeholder="Elena Vance" className="w-full bg-[#fffdf5] border-2 border-[#111111] p-2.5 focus:outline-none" />
          </div>
          <div>
            <label className="block font-bold mb-1">EMAIL</label>
            <input type="email" placeholder="elena@company.com" className="w-full bg-[#fffdf5] border-2 border-[#111111] p-2.5 focus:outline-none" />
          </div>
          <button className="btn-brutal bg-[#ffd92e] text-[#111111] font-grotesk font-black text-xs py-3 w-full mt-2 flex items-center justify-center gap-2">
            <span>SUBMIT REQUEST</span>
            <ArrowRight size={14} strokeWidth={3} />
          </button>
        </form>
      </div>
    </section>
  );
}

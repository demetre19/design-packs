import React, { useState } from 'react';
import { X, Terminal } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer"
          >
            OPEN DIALOG MODAL 01
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-[#111]/60 flex items-center justify-center z-50 p-4">
            <div className="max-w-lg w-full bg-white border-2 border-[#111] p-6 relative text-left">
              <span className="absolute -top-2 -left-2 font-bold">+</span>
              <span className="absolute -top-2 -right-2 font-bold">+</span>
              <span className="absolute -bottom-2 -left-2 font-bold">+</span>
              <span className="absolute -bottom-2 -right-2 font-bold">+</span>

              <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-4 text-[10px]">
                <span className="font-bold uppercase">[DIALOG MODAL // M-01]</span>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-[#e8e8e6] transition-colors cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-xl font-black uppercase mb-3">SECURE TELEMETRY ACCESS</h3>
              <p className="text-[10px] text-[#555] uppercase leading-relaxed mb-6">
                You are about to access the restricted Stuttgart engineering telemetry stream. All actions are logged and audited against FIA Annex J regulations.
              </p>

              <div className="grid grid-cols-2 gap-3 text-[10px] mb-6">
                <div className="border border-[#111] p-2">
                  <span className="text-[#666] block text-[8px]">SECURITY LEVEL</span>
                  <span className="font-bold">UNRESTRICTED</span>
                </div>
                <div className="border border-[#111] p-2">
                  <span className="text-[#666] block text-[8px]">ENCRYPTION</span>
                  <span className="font-bold">SHA-256</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 bg-[#111] text-[#e8e8e6] font-bold text-[10px] uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer"
                >
                  CONFIRM ACCESS
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 border border-[#111] font-bold text-[10px] uppercase tracking-widest hover:bg-[#e8e8e6] transition-colors cursor-pointer"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

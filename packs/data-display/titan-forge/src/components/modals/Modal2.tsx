import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-mono text-xs text-neutral-600 mb-4 uppercase">Confirmation dialog closed.</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-black text-white px-6 py-3 font-mono text-xs font-black uppercase hover:bg-[#f25c05] hover:text-black transition-colors"
          >
            Reopen Confirm Modal 02
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans relative min-h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="border-4 border-black bg-white max-w-md w-full shadow-none font-sans">
          <div className="bg-black text-white p-6 flex items-center justify-between border-b-4 border-[#f25c05]">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-[#f25c05]" />
              <span className="font-sans font-black text-lg tracking-tight uppercase">CONFIRM DEPLOYMENT SHUTDOWN</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-4 font-mono text-xs">
            <p className="text-neutral-800 uppercase leading-relaxed font-bold">
              Are you certain you wish to halt all autonomous extraction fleets in Sector 4?
            </p>
            <p className="text-neutral-600 uppercase">
              This action will interrupt smelting cell operations and trigger automatic failover protocols.
            </p>
          </div>

          {/* Mass-contrast choice: solid yes, outline no */}
          <div className="p-6 border-t-2 border-black bg-neutral-50 grid grid-cols-2 gap-4 font-mono text-xs">
            <button 
              onClick={() => setIsOpen(false)}
              className="border-2 border-black py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors text-center"
            >
              Cancel (No)
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-black text-white py-3 font-black uppercase hover:bg-[#f25c05] hover:text-black transition-colors text-center"
            >
              Confirm (Yes)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

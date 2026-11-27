import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black flex flex-col items-center justify-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-6 py-3 font-black uppercase text-xs tracking-wider hover:bg-[#ff2e00] hover:text-black transition-colors cursor-pointer mb-8"
      >
        OPEN ALLOCATION DIALOG [01]
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black border-2 border-black max-w-xl w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-black text-white p-2 hover:bg-[#ff2e00] hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// SYSTEM NOTIFICATION</div>
            
            {/* Oversized cropped title */}
            <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              ALLOCATION <br />
              <span className="text-[#ff2e00]">CONFIRMED</span>
            </h3>

            <p className="font-mono text-xs text-neutral-700 leading-relaxed mb-8">
              Your telemetry allocation for the Velox Apex Track Predator has been registered at Tokyo Dock #4. A secure courier will deliver your credentials.
            </p>

            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-black text-white hover:bg-[#ff2e00] hover:text-black font-black py-4 uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>ACKNOWLEDGE & CLOSE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

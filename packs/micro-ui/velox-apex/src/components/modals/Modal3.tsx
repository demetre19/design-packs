import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black flex flex-col items-center justify-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-6 py-3 font-black uppercase text-xs tracking-wider hover:bg-[#ff2e00] hover:text-black transition-colors cursor-pointer mb-8"
      >
        OPEN SLIDE-OVER DRAWER [03]
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-end">
          <div className="bg-white text-black w-full max-w-md h-full border-l-2 border-black p-8 flex flex-col justify-between relative shadow-2xl overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-xs text-[#ff2e00] font-bold">// DRAWER SYS.03</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-black text-white p-2 hover:bg-[#ff2e00] hover:text-black transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical rotated heading or large title */}
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">
                TELEMETRY CONFIGURATOR
              </h3>
              <p className="font-mono text-xs text-neutral-600 mb-8">
                Customize spring rates, regenerative braking aggressiveness, and active winglet downforce profiles in real-time.
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-neutral-500 mb-1 uppercase">SUSPENSION DAMPING</label>
                  <input type="range" className="w-full accent-[#ff2e00]" />
                </div>
                <div>
                  <label className="block text-neutral-500 mb-1 uppercase">TRACTION SLIP LIMIT</label>
                  <input type="range" className="w-full accent-[#ff2e00]" />
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-black text-white hover:bg-[#ff2e00] hover:text-black font-black py-4 uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer mt-8"
            >
              <span>APPLY TELEMETRY SETTINGS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

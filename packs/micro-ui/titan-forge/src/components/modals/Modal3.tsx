import React, { useState } from 'react';
import { X, Shield, ArrowRight } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-mono text-xs text-neutral-600 mb-4 uppercase">Slide-over drawer closed.</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-black text-white px-6 py-3 font-mono text-xs font-black uppercase hover:bg-[#f25c05] hover:text-black transition-colors"
          >
            Reopen Slide-Over Drawer 03
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans relative min-h-[500px]">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xs flex justify-end">
        <div className="border-l-4 border-black bg-white w-full max-w-md h-full flex flex-col justify-between shadow-none font-sans">
          {/* Thick black header mass */}
          <div className="bg-black text-white p-6 flex items-center justify-between border-b-4 border-[#f25c05]">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-[#f25c05]" />
              <span className="font-sans font-black text-lg tracking-tight uppercase">TELEMETRY INSPECT</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6 font-mono text-xs flex-1 overflow-y-auto">
            <div className="space-y-2">
              <span className="text-[10px] text-neutral-500 uppercase block">01 // NODE STATUS</span>
              <div className="border-2 border-black p-3 bg-neutral-50 font-bold">
                EXCAVATOR TF-900 // ACTIVE
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-neutral-500 uppercase block">02 // HYDRAULIC PRESSURE</span>
              <div className="border-2 border-black p-3 bg-neutral-50 font-bold text-[#f25c05]">
                14,000 PSI // STABLE
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-neutral-500 uppercase block">03 // ACOUSTIC VIBRATION</span>
              <div className="border-2 border-black p-3 bg-neutral-50 font-bold">
                0.02 KHZ // NO FRACTURE DETECTED
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-neutral-500 uppercase block">04 // OPERATOR NOTES</span>
              <textarea 
                rows={3} 
                placeholder="ENTER FIELD INSPECTION NOTES..." 
                className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] uppercase"
              ></textarea>
            </div>
          </div>

          <div className="p-6 border-t-2 border-black bg-neutral-50">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-black text-white py-4 font-mono text-xs font-black uppercase tracking-widest hover:bg-[#f25c05] hover:text-black transition-colors flex items-center justify-center space-x-2"
            >
              <span>Save & Close Inspector</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

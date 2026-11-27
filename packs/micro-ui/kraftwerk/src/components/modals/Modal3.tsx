import React, { useState } from 'react';
import { X, Terminal } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer"
          >
            OPEN SLIDE-OVER DRAWER 03
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-[#111]/50 flex justify-end z-50">
            <div className="max-w-md w-full bg-white border-l-2 border-[#111] h-full flex flex-col justify-between text-left">
              <div>
                <div className="p-4 bg-[#111] text-[#e8e8e6] flex justify-between items-center text-[10px] uppercase">
                  <span className="font-bold">[SLIDE-OVER DRAWER // M-03]</span>
                  <button onClick={() => setIsOpen(false)} className="cursor-pointer"><X className="w-4 h-4" /></button>
                </div>

                <div className="p-6 space-y-6 text-[10px]">
                  <div>
                    <h3 className="text-xl font-black uppercase mb-2">SYSTEM PARAMETERS</h3>
                    <p className="text-[#666] uppercase">Live inspection of active homologation telemetry channels.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="border border-[#111] p-3">
                      <span className="text-[#666] block text-[8px]">CHASSIS TEMPERATURE</span>
                      <span className="font-bold text-sm">84.5 °C</span>
                    </div>
                    <div className="border border-[#111] p-3">
                      <span className="text-[#666] block text-[8px]">OIL PRESSURE</span>
                      <span className="font-bold text-sm">4.8 BAR</span>
                    </div>
                    <div className="border border-[#111] p-3">
                      <span className="text-[#666] block text-[8px]">DOWNFORCE LOAD</span>
                      <span className="font-bold text-sm">620 KG</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barcode Footer */}
              <div className="border-t border-[#111] p-4 bg-[#e8e8e6]">
                <div className="h-5 w-full bg-[repeating-linear-gradient(90deg,#111,#111_2px,#e8e8e6_2px,#e8e8e6_5px)] border border-[#111] mb-2" />
                <div className="flex justify-between text-[8px] uppercase">
                  <span>REF: SLIDE-03</span>
                  <button onClick={() => setIsOpen(false)} className="font-bold hover:underline cursor-pointer">CLOSE DRAWER</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

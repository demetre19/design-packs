import React, { useState } from 'react';
import { X, Shield } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-mono text-xs text-neutral-600 mb-4 uppercase">Modal dialog closed.</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-black text-white px-6 py-3 font-mono text-xs font-black uppercase hover:bg-[#f25c05] hover:text-black transition-colors"
          >
            Reopen Modal Dialog 01
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans relative min-h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="border-4 border-black bg-white max-w-lg w-full shadow-none font-sans">
          {/* Heavy black title block */}
          <div className="bg-black text-white p-6 flex items-center justify-between border-b-4 border-[#f25c05]">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-[#f25c05]" />
              <span className="font-sans font-black text-lg tracking-tight uppercase">SYSTEM OVERRIDE AUTHORIZATION</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-4 font-mono text-xs">
            <div className="border-l-4 border-[#f25c05] pl-4 py-2 bg-neutral-100 text-neutral-800">
              WARNING: Executing this protocol will reconfigure all connected excavation nodes in Sector 7-Alpha.
            </div>
            <p className="text-neutral-600 leading-relaxed uppercase">
              Confirm telemetry override by entering your operator credentials below. All actions are logged under ISO-9001 compliance standards.
            </p>
            <div className="space-y-2 pt-2">
              <label className="block font-bold text-black uppercase">01 // OPERATOR PASSKEY</label>
              <input 
                type="password" 
                placeholder="ENTER SECURE PASSKEY..." 
                className="w-full border-2 border-black p-3 bg-[#f5f4f0] focus:outline-none focus:border-[#f25c05] uppercase"
              />
            </div>
          </div>

          <div className="p-6 border-t-2 border-black bg-neutral-50 flex items-center justify-end space-x-4 font-mono text-xs">
            <button 
              onClick={() => setIsOpen(false)}
              className="border-2 border-black px-6 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors"
            >
              Abort
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-[#f25c05] text-black px-6 py-3 font-black uppercase hover:bg-black hover:text-white transition-colors"
            >
              Authorize Override
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

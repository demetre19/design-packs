import React from 'react';
import { X, Check } from 'lucide-react';

export function Modal3() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-lg mx-auto border border-neutral-700 bg-neutral-950 p-8 space-y-6 relative shadow-2xl font-mono text-xs">
        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
          <span className="text-neutral-400 uppercase tracking-widest">Modal 03 // Specimen Receipt</span>
          <button className="text-neutral-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <div className="text-center space-y-2 py-4">
          <div className="w-12 h-12 bg-white text-black flex items-center justify-center mx-auto rounded-full font-bold text-lg mb-4">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">Acquisition Confirmed</h3>
          <p className="text-neutral-400">RECEIPT NO. #GRV-2026-8849</p>
        </div>
        <div className="space-y-2 border-t border-b border-neutral-900 py-4 text-neutral-300">
          <div className="flex justify-between"><span>ITEM:</span> <span>Gravitas Master Archive (30 Cuts)</span></div>
          <div className="flex justify-between"><span>LICENSE:</span> <span>Studio Pro (10 Workstations)</span></div>
          <div className="flex justify-between"><span>TOTAL:</span> <span className="text-white font-bold">$180.00 USD</span></div>
        </div>
        <button className="w-full bg-white text-black py-3 uppercase tracking-widest hover:bg-neutral-200 font-bold">
          Download OTF / WOFF2 Package (.zip)
        </button>
      </div>
    </section>
  );
}

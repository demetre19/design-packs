import React, { useState } from 'react';
import { X, Shield } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc] text-center space-y-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">MODAL 01 · SCREW-CORNER DIALOG</div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.25em] px-8 py-3 hover:bg-[#232a30] transition-colors"
      >
        OPEN ATELIER DOSSIER DIALOG
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="screw-corner bg-white border-2 border-[#232a30] max-w-lg w-full p-8 relative space-y-6 text-left shadow-2xl">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-[#232a30] hover:text-[#2e5e8e]">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 border-b border-[#d0d0cc] pb-4">
              <Shield className="w-5 h-5 text-[#2e5e8e]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#232a30] font-semibold">CALIBRE 320 DOSSIER</span>
            </div>
            <p className="font-mono text-xs text-[#232a30]/80 tracking-wider leading-relaxed">
              This movement has passed 720 hours of isometric vibration testing in Geneva. Issued with individual certificate number REF. 9942-CH.
            </p>
            <div className="pt-4 flex justify-end space-x-4">
              <button onClick={() => setIsOpen(false)} className="border border-[#d0d0cc] font-mono text-xs tracking-[0.2em] px-6 py-2.5 text-[#232a30] hover:border-[#2e5e8e]">
                CLOSE
              </button>
              <button onClick={() => setIsOpen(false)} className="bg-[#2e5e8e] text-white font-mono text-xs tracking-[0.2em] px-6 py-2.5 hover:bg-[#232a30]">
                CONFIRM ACQUISITION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

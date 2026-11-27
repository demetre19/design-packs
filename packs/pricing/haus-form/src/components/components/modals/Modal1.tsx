/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export const Modal1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">MODAL 01 // SHARP-BORDERED DIALOG</span>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors"
        >
          Open Dialog Specimen →
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-none flex items-center justify-center z-50 p-4">
            <div className="bg-[#ffffff] border-2 border-[#0a0a0a] w-full max-w-lg p-8 relative">
              <div className="flex justify-between items-center pb-4 border-b border-[#0a0a0a] mb-6">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#e30613]"></span>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">DIALOG SPEC // 01</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">SYSTEM LICENSE AGREEMENT</h3>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 mb-6">
                By activating this specimen, you agree to adhere to strict Swiss typographic grid alignment and refrain from applying decorative border radius.
              </p>

              <div className="flex space-x-4">
                <button onClick={() => setIsOpen(false)} className="flex-1 py-3 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors">
                  Accept & Close
                </button>
                <button onClick={() => setIsOpen(false)} className="px-6 py-3 border border-[#0a0a0a] text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors">
                  Decline
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

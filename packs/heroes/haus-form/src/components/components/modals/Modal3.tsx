/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export const Modal3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">MODAL 03 // SLIDE-OVER PANEL WITH TABULAR ROWS</span>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-[#0a0a0a] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] transition-colors"
        >
          Open Slide-Over Panel →
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-[#0a0a0a]/80 flex justify-end z-50">
            <div className="bg-[#ffffff] border-l-2 border-[#0a0a0a] w-full max-w-md h-full p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-[#0a0a0a] mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#e30613]"></span>
                    <span className="text-xs font-mono uppercase font-bold">SLIDE-OVER ARCHIVE</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6 font-mono text-xs uppercase">
                  <div className="border border-[#0a0a0a] p-4 flex justify-between items-center">
                    <span>01. GROTESQUE FONT</span>
                    <span className="text-[#e30613]">ACTIVE</span>
                  </div>
                  <div className="border border-[#0a0a0a] p-4 flex justify-between items-center">
                    <span>02. 12-COL RASTER</span>
                    <span className="text-[#e30613]">LOCKED</span>
                  </div>
                  <div className="border border-[#0a0a0a] p-4 flex justify-between items-center">
                    <span>03. SIGNAL RED #E30613</span>
                    <span className="text-[#e30613]">STABLE</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#0a0a0a] pt-6">
                <button onClick={() => setIsOpen(false)} className="w-full py-3 bg-[#0a0a0a] text-[#ffffff] font-mono text-xs uppercase tracking-widest hover:bg-[#e30613] transition-colors">
                  Close Panel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

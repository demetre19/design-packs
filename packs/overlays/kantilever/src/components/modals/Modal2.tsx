import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Modal2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15 text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// COMPONENT: DUAL ANGULAR BUTTON MODAL</span>
        <h2 className="text-3xl font-extrabold uppercase">TRIGGER CONFIRMATION MODAL</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3.5 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#14161a] hover:text-[#f7f6f3] transition-colors"
        >
          Open Angular Action Modal
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-[#14161a]/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-[#f7f6f3] text-[#14161a] max-w-md w-full p-8 relative space-y-6 text-left border-2 border-[#14161a]">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-[#14161a]/60 uppercase">// ACTION REQUIRED</span>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-[#14161a]/10">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-extrabold uppercase">AUTHORIZE BLUEPRINT DOWNLOAD</h3>
              <p className="text-xs text-[#14161a]/70 font-sans">
                Download high-resolution CAD files for the Zermatt Glass Monolith (1,120 m²).
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-3 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#14161a] hover:text-[#f7f6f3] transition-colors transform skew-x-[-6deg]"
                >
                  <span className="transform skew-x-[6deg] block">Authorize</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-3 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors transform skew-x-[-6deg]"
                >
                  <span className="transform skew-x-[6deg] block">Decline</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export const Modal1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15 text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// COMPONENT: DIAGONAL DIALOG MODAL</span>
        <h2 className="text-3xl font-extrabold uppercase">TRIGGER CENTERED DIALOG</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3.5 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors"
        >
          Open Centered Dialog
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-[#14161a]/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div
              className="bg-[#14161a] text-[#f7f6f3] max-w-lg w-full p-8 relative space-y-6 text-left border border-[#f7f6f3]/20 shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)' }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-[#ffc72c] text-[#14161a] hover:bg-[#f7f6f3] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[#ffc72c] uppercase">// SYSTEM DIALOG 01</span>
                <h3 className="text-2xl font-extrabold uppercase">CONFIRM STRUCTURAL BRIEF</h3>
              </div>

              <p className="text-xs text-[#f7f6f3]/70 font-sans leading-relaxed">
                You are about to transmit project specification parameters to KANTILEVER practice partners in Zurich. Estimated response window: 24 hours.
              </p>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center justify-center gap-2"
                >
                  Confirm Transmission <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 border border-[#f7f6f3]/30 text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3]/10 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

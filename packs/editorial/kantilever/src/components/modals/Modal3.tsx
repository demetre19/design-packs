import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export const Modal3: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15 text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// COMPONENT: SLIDE-OVER DRAWER</span>
        <h2 className="text-3xl font-extrabold uppercase">TRIGGER DIAGONAL SLIDE-OVER</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3.5 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors"
        >
          Open Slide-Over Drawer
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-[#14161a]/80 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-md bg-[#14161a] text-[#f7f6f3] h-full p-8 flex flex-col justify-between relative space-y-8 overflow-y-auto">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-[#ffc72c] uppercase">// SPEC DRAWER</span>
                  <button onClick={() => setIsOpen(false)} className="p-2 bg-[#ffc72c] text-[#14161a] hover:bg-[#f7f6f3]">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-2xl font-extrabold uppercase">TECHNICAL MONOGRAPH 04</h3>
                <p className="text-xs text-[#f7f6f3]/70 font-sans leading-relaxed">
                  Detailed specifications for structural cantilevers, material compliance, and seismic lateral load resistances.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#f7f6f3]/15 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-60">AREA</span>
                    <span className="font-bold">1,840 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">LEVELS</span>
                    <span className="font-bold">4 Levels</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">YEAR</span>
                    <span className="font-bold">2026</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center justify-center gap-2"
              >
                Close Drawer <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, ArrowRight, Zap, Check } from 'lucide-react';

export function Modal3() {
  const [panelOpen, setPanelOpen] = useState(true);
  const [option, setOption] = useState('CARBON WINGLET KIT');

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33] text-center">
      <button 
        onClick={() => setPanelOpen(true)}
        className="bg-[#ff5a1f] text-black font-extrabold text-xs px-8 py-4 clip-corner cursor-pointer"
      >
        OPEN SLIDE-OVER CONFIGURATOR PANEL
      </button>

      {panelOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-end">
          <div className="w-full max-w-md bg-[#16181d] border-l border-[#272a33] p-8 flex flex-col justify-between h-full overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-[#272a33] pb-4">
                <div>
                  <span className="font-mono-spec text-[10px] text-[#ff5a1f]">SLIDE-OVER PANEL</span>
                  <h3 className="font-display font-extrabold text-2xl text-white">OPTION SELECTOR</h3>
                </div>
                <button onClick={() => setPanelOpen(false)} className="text-neutral-400 hover:text-white cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4 font-mono-spec text-xs">
                {['CARBON WINGLET KIT', 'TITANIUM EXHAUST SHELL', 'ÖHLINS TTX36 SUSPENSION', 'FORGED MAGNESIUM WHEELS'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setOption(item)}
                    className={`w-full p-4 text-left border clip-corner transition-all flex items-center justify-between cursor-pointer ${option === item ? 'border-[#ff5a1f] bg-[#ff5a1f]/10 text-white' : 'border-[#272a33] text-neutral-400 hover:border-neutral-500'}`}
                  >
                    <span>{item}</span>
                    {option === item && <Check size={16} className="text-[#ff5a1f]" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#272a33]">
              <button 
                onClick={() => setPanelOpen(false)}
                className="w-full bg-[#ff5a1f] text-black font-extrabold text-xs py-4 clip-corner hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>APPLY CONFIGURATION</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

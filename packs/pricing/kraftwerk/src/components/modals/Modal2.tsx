import React, { useState } from 'react';
import { X } from 'lucide-react';

export function Modal2() {
  const [isOpen, setIsOpen] = useState(true);
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer"
          >
            OPEN CONFIRM DIALOG 02
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-[#111]/60 flex items-center justify-center z-50 p-4">
            <div className="max-w-md w-full bg-white border-2 border-[#111] p-6 relative text-left">
              <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-4 text-[10px]">
                <span className="font-bold uppercase">[CONFIRMATION CHOICE CELL // M-02]</span>
                <button onClick={() => setIsOpen(false)} className="cursor-pointer"><X className="w-4 h-4" /></button>
              </div>

              <h3 className="text-lg font-black uppercase mb-3">SELECT DEPLOYMENT TARGET</h3>
              <p className="text-[10px] text-[#555] uppercase mb-4">Choose your preferred homologation testing circuit facility:</p>

              <div className="space-y-2 text-[10px] mb-6">
                {['NURBURGRING NORDSCHLEIFE', 'STUTTGART TEST TRACK', 'SPA-FRANCORCHAMPS'].map((c, i) => (
                  <div 
                    key={i} 
                    onClick={() => setChoice(c)}
                    className={`p-3 border border-[#111] cursor-pointer flex justify-between items-center transition-colors ${choice === c ? 'bg-[#111] text-[#e8e8e6]' : 'bg-[#f8f8f6] hover:bg-[#f0f0ee]'}`}
                  >
                    <span className="font-bold">{c}</span>
                    <span>{choice === c ? '[SELECTED]' : '[SELECT]'}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => { alert(`Confirmed target: ${choice || 'None'}`); setIsOpen(false); }}
                className="w-full py-3 bg-[#111] text-[#e8e8e6] font-bold text-[10px] uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer"
              >
                PROCEED WITH SELECTION
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

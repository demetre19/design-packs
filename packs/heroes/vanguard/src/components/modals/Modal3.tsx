import React, { useState } from 'react';
import { Sliders, X } from 'lucide-react';

export function Modal3() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35] text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ff3d00] text-white font-black text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
        >
          OPEN SLIDE-OVER CONFIGURATOR
        </button>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35] relative flex justify-end">
      <div className="w-full max-w-md bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] relative shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#3a3e4c] pb-4">
          <div className="flex items-center space-x-2 text-[#ff3d00]">
            <Sliders className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">SLIDE-OVER CONFIGURATOR</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-zinc-400 uppercase tracking-widest block mb-2">SCRAMJET FUEL RATIO</label>
            <input type="range" className="w-full accent-[#ff3d00] bg-[#16181d]" />
          </div>
          <div>
            <label className="text-zinc-400 uppercase tracking-widest block mb-2">ANGLE OF ATTACK TRIM</label>
            <input type="range" className="w-full accent-[#ff3d00] bg-[#16181d]" />
          </div>
          <div className="bg-[#16181d] p-4 border border-[#2a2d35] space-y-2">
            <div className="flex justify-between"><span className="text-zinc-400">STATUS:</span><span className="font-bold text-[#ff3d00]">CONFIGURING</span></div>
            <div className="flex justify-between"><span className="text-zinc-400">EST. MACH:</span><span className="font-bold text-white">M 4.1</span></div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="w-full bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest py-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
        >
          APPLY CONFIGURATION
        </button>
      </div>
    </section>
  );
}

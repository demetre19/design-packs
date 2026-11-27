import React, { useState } from 'react';
import { X, ShieldAlert, ChevronRight } from 'lucide-react';

export function Modal1() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35] text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ff3d00] text-white font-black text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
        >
          RE-OPEN CLIPPED DIALOG
        </button>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35] relative flex justify-center items-center">
      <div className="w-full max-w-lg bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] relative shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#3a3e4c] pb-4">
          <div className="flex items-center space-x-2 text-[#ff3d00]">
            <ShieldAlert className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">SYSTEM VERIFICATION DIALOG</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          <h3 className="text-lg font-black uppercase font-sans">CONFIRM SORTIE S-04 LAUNCH</h3>
          <p className="text-zinc-300 leading-relaxed">
            All telemetry channels are stable. Scramjet ignition sequence ready. Do you wish to engage atmospheric launch?
          </p>
          <div className="bg-[#16181d] p-4 border border-[#2a2d35] space-y-2">
            <div className="flex justify-between"><span className="text-zinc-400">MACH TARGET:</span><span className="font-bold text-[#ff3d00]">M 4.2</span></div>
            <div className="flex justify-between"><span className="text-zinc-400">ALTITUDE:</span><span className="font-bold">FL520</span></div>
          </div>
        </div>

        <div className="flex space-x-4 pt-4 border-t border-[#3a3e4c]">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest py-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] flex items-center justify-center space-x-2"
          >
            <span>CONFIRM LAUNCH</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-[#16181d] hover:bg-[#282c35] text-zinc-300 border border-[#3a3e4c] px-6 py-3 font-bold text-xs [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
          >
            ABORT
          </button>
        </div>
      </div>
    </section>
  );
}

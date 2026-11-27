import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-black text-white border-t-2 border-white max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        <div className="border border-white p-4">
          <span className="font-mono-num text-[10px] text-zinc-400">STRIP 01 // SEDE</span>
          <div className="overflow-hidden border border-white mt-2 h-24">
            <img src="https://picsum.photos/seed/foot2a/400/200" className="w-full h-full collage-img" alt="venue" />
          </div>
        </div>
        <div className="border border-white p-4">
          <span className="font-mono-num text-[10px] text-zinc-400">STRIP 02 // PROVE</span>
          <div className="overflow-hidden border border-white mt-2 h-24">
            <img src="https://picsum.photos/seed/foot2b/400/200" className="w-full h-full collage-img" alt="rehearsal" />
          </div>
        </div>
        <div className="border border-white p-4 flex flex-col justify-between bg-white text-black">
          <span className="font-mono-num text-[10px] font-bold">INFO COLLABORAZIONI</span>
          <div className="font-display text-2xl tracking-tighter">CONTATTA LA DIREZIONE</div>
          <span className="font-mono-num text-[10px] underline">DIREZIONE@TEATRODELCAOS.IT</span>
        </div>
      </div>
      <div className="border-t border-white pt-4 flex flex-col sm:flex-row justify-between text-[10px] font-mono-num uppercase">
        <span>TEATRO DEL CAOS // COLLETTIVO TEATRALE SPERIMENTALE</span>
        <span>MILANO // ROMA // BERLINO</span>
      </div>
    </footer>
  );
}

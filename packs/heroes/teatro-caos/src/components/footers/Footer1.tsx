import React from 'react';

export function Footer1() {
  return (
    <footer className="w-full bg-black text-white border-t-2 border-white max-w-6xl mx-auto p-6">
      {/* Giant condensed company wordmark filling footer width */}
      <div className="border-b-2 border-white pb-6 mb-6 text-center">
        <div className="font-display text-6xl sm:text-8xl md:text-9xl tracking-tighter leading-none hover:opacity-90 transition-opacity">
          TEATRO DEL CAOS
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-[10px] font-mono-num uppercase tracking-widest text-zinc-400">
        <div>
          <span className="text-white block font-bold mb-2">SEDE MILANO</span>
          <p>VIA SPERIMENTALE 04<br />20121 MILANO (MI)</p>
        </div>
        <div>
          <span className="text-white block font-bold mb-2">SEDE ROMA</span>
          <p>TEATRO ROMANO 12<br />00184 ROMA (RM)</p>
        </div>
        <div>
          <span className="text-white block font-bold mb-2">CONTATTI</span>
          <p>INFO@TEATRODELCAOS.IT<br />+39 02 9999888</p>
        </div>
        <div>
          <span className="text-white block font-bold mb-2">SOCIAL // ARCHIVIO</span>
          <p>INSTAGRAM // VIMEO<br />MANIFESTO 2026</p>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono-num text-zinc-500 uppercase">
        <span>© 2026 TEATRO DEL CAOS. TUTTI I DIRITTI RISERVATI.</span>
        <span>PROGETTO GRAFICO: MANIFESTO COLLAGE</span>
      </div>
    </footer>
  );
}

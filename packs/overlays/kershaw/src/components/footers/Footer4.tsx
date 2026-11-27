import React from 'react';

export function Footer4() {
  return (
    <footer className="bg-[#0c0d0f] text-white pt-20 pb-12 px-6 border-t border-[#22262f] font-mono overflow-hidden relative">
      <div className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none">
        <span className="text-[15vw] font-black text-zinc-900/40 uppercase tracking-tighter">KERSHAW</span>
      </div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
        <div>
          <span className="text-xs text-[#ffd500] tracking-widest uppercase block mb-2">// POWERWORKS</span>
          <h3 className="text-2xl font-extrabold uppercase">KERSHAW DYNAMICS</h3>
        </div>
        <div className="flex gap-6 text-xs text-zinc-400">
          <a href="#" className="hover:text-[#ffd500]">ENGINEERING</a>
          <a href="#" className="hover:text-[#ffd500]">TELEMETRY</a>
          <a href="#" className="hover:text-[#ffd500]">CONTACT</a>
        </div>
      </div>
    </footer>
  );
}

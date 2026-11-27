import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-black text-white border-b border-white font-mono py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/40 text-xs uppercase tracking-wider">
          <div>
            <div className="font-black text-sm mb-3">STUDIO STERLING</div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              Spatial typography and brand architecture practice based in London and Zurich.
            </p>
          </div>
          <div>
            <div className="font-bold mb-3 text-neutral-400">NAVIGATION</div>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#work" className="hover:underline">01 / Works</a></li>
              <li><a href="#experience" className="hover:underline">02 / Experience</a></li>
              <li><a href="#archive" className="hover:underline">03 / Archive</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-3 text-neutral-400">INSTITUTIONS</div>
            <ul className="space-y-2 text-[11px]">
              <li>Tate Modern</li>
              <li>Serpentine Gallery</li>
              <li>ETH Zurich</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-3 text-neutral-400">LEGAL</div>
            <p className="text-[11px] text-neutral-400">
              All typographic rights reserved under international copyright conventions.
            </p>
          </div>
        </div>
        <div className="pt-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-500">
          <span>CURRICULUM SYSTEM V4.2</span>
          <span>LONDON / ZURICH</span>
        </div>
      </div>
    </footer>
  );
}

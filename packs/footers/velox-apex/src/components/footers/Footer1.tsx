import React from 'react';

export function Footer1() {
  return (
    <footer className="w-full bg-black text-white py-16 overflow-hidden border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-xs">
        <div>
          <span className="text-[#ff2e00] font-bold">// SYSTEM HQ</span>
          <p className="text-neutral-400 mt-1">TOKYO TEST DOCK // KINETIC LABS</p>
        </div>
        <div className="flex gap-6 text-neutral-400">
          <a href="#twitter" className="hover:text-[#ff2e00]">TWITTER // X</a>
          <a href="#instagram" className="hover:text-[#ff2e00]">INSTAGRAM</a>
          <a href="#github" className="hover:text-[#ff2e00]">GITHUB</a>
        </div>
      </div>

      {/* Gigantic cropped wordmark running off-canvas */}
      <div className="w-full overflow-hidden whitespace-nowrap select-none">
        <div className="text-[14vw] font-black uppercase tracking-tighter text-neutral-800 leading-none inline-block">
          VELOX APEX // PREDATOR SYSTEM
        </div>
      </div>
    </footer>
  );
}

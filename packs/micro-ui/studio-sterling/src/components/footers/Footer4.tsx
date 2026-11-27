import React from 'react';

export function Footer4() {
  return (
    <footer className="w-full bg-white text-black border-b border-black font-mono py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full text-[10px] font-bold">Z</span>
          <span className="font-bold">STUDIO STERLING ARCHIVE © 2026</span>
        </div>
        <div className="flex items-center gap-6 text-[11px]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-black"></span> SYSTEM: ONLINE
          </span>
          <a href="#top" className="hover:underline font-bold">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

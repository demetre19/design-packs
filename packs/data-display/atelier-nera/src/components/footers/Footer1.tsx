import React from 'react';

export function Footer1() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-16 border-t border-black/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="font-light text-xl tracking-tight lowercase block mb-2">atelier nera</span>
          <span className="text-[10px] text-black/50 uppercase tracking-widest">milan &amp; paris — all rights reserved © 2026</span>
        </div>
        <div className="flex items-center gap-8 text-xs font-light lowercase text-black/70">
          <a href="#" className="hover:text-black">privacy</a>
          <a href="#" className="hover:text-black">terms</a>
          <a href="#" className="hover:text-black">colophon</a>
        </div>
      </div>
    </footer>
  );
}

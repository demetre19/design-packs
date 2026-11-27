import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-black/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="space-y-3">
          <span className="text-[9px] uppercase tracking-widest text-black/40">practice</span>
          <ul className="space-y-2 text-xs font-light lowercase text-black/70">
            <li><a href="#" className="hover:text-black">about</a></li>
            <li><a href="#" className="hover:text-black">team</a></li>
            <li><a href="#" className="hover:text-black">offices</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <span className="text-[9px] uppercase tracking-widest text-black/40">works</span>
          <ul className="space-y-2 text-xs font-light lowercase text-black/70">
            <li><a href="#" className="hover:text-black">selected</a></li>
            <li><a href="#" className="hover:text-black">archive</a></li>
            <li><a href="#" className="hover:text-black">monographs</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <span className="text-[9px] uppercase tracking-widest text-black/40">journal</span>
          <ul className="space-y-2 text-xs font-light lowercase text-black/70">
            <li><a href="#" className="hover:text-black">essays</a></li>
            <li><a href="#" className="hover:text-black">notes</a></li>
            <li><a href="#" className="hover:text-black">press</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <span className="text-[9px] uppercase tracking-widest text-black/40">social</span>
          <ul className="space-y-2 text-xs font-light lowercase text-black/70">
            <li><a href="#" className="hover:text-black">instagram</a></li>
            <li><a href="#" className="hover:text-black">are.na</a></li>
            <li><a href="#" className="hover:text-black">twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-t border-black/10 text-[10px] uppercase tracking-wider text-black/50">
        <span>atelier nera studio</span>
        <span>edition 2026</span>
      </div>
    </footer>
  );
}

import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-[#fafaf8] border-t border-[#e2e0d8] py-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#e2e0d8]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#16171a]">ATELIER VARDEN</span>
            </div>
            <p className="text-stone-500 text-xs font-mono">ARCHITECTURAL REGISTER NO. 04</p>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-stone-400 mb-3">ZÜRICH STUDIO</div>
            <p className="text-xs font-mono text-stone-600">Zürichbergstrasse 44<br />8044 Zürich, Switzerland</p>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-stone-400 mb-3">TOKYO STUDIO</div>
            <p className="text-xs font-mono text-stone-600">Minami-Aoyama 3-chome<br />Minato-ku, Tokyo 107-0062</p>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-stone-400 mb-3">DIRECT INQUIRY</div>
            <p className="text-xs font-mono text-stone-600">atelier@varden.arch<br />+41 44 211 88 00</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-stone-500 uppercase tracking-widest">
          <div>© 2026 ATELIER VARDEN. ALL RIGHTS RESERVED.</div>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#terms" className="hover:text-[#b5482e]">Terms</a>
            <a href="#privacy" className="hover:text-[#b5482e]">Privacy</a>
            <a href="#press" className="hover:text-[#b5482e]">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-black text-white border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="text-3xl font-black uppercase tracking-tighter block mb-4 font-serif-editorial">VAULT*</span>
          <p className="text-xs font-mono text-zinc-400 leading-relaxed">
            Inverted black panel footer representation. Absolute contrast and stark structural typography.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-bold">Navigation</h4>
          <ul className="space-y-2 text-xs font-mono text-zinc-300">
            <li><a href="#" className="hover:text-white">Manifesto</a></li>
            <li><a href="#" className="hover:text-white">Volumes</a></li>
            <li><a href="#" className="hover:text-white">Stockists</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-bold">Legal</h4>
          <ul className="space-y-2 text-xs font-mono text-zinc-300">
            <li><a href="#" className="hover:text-white">Terms of Archival</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie Protocol</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-bold">Inquiries</h4>
          <p className="text-xs font-mono text-zinc-300 mb-2">curator@vault-editorial.com</p>
          <p className="text-xs font-mono text-zinc-400">+33 1 42 68 55 00</p>
        </div>
      </div>
      <div className="border-t border-zinc-800 px-4 py-4 text-center text-[10px] font-mono uppercase text-zinc-500">
        &copy; 2026 VAULT EDITORIAL. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}

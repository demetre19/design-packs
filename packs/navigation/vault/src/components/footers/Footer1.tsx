import React from 'react';

export function Footer1() {
  return (
    <footer className="w-full bg-white text-black border-b border-black">
      <div className="flex justify-between items-center px-4 py-1.5 text-[9px] uppercase tracking-widest border-b border-black font-mono">
        <span>VAULT* COLOPHON</span>
        <span>ISSN 2940-1029</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-2xl font-black uppercase tracking-tighter block mb-4 font-serif-editorial">VAULT*</span>
          <p className="text-xs font-mono text-zinc-600 leading-relaxed">
            A print-native editorial and design system exploring monochromatic purity and brutalist form.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest font-bold mb-4">Index</h4>
          <ul className="space-y-2 text-xs font-mono text-zinc-700">
            <li><a href="#" className="hover:underline">Collections</a></li>
            <li><a href="#" className="hover:underline">Lookbook</a></li>
            <li><a href="#" className="hover:underline">Exhibits</a></li>
            <li><a href="#" className="hover:underline">Archives</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest font-bold mb-4">Studios</h4>
          <ul className="space-y-2 text-xs font-mono text-zinc-700">
            <li><a href="#" className="hover:underline">Paris // Rue de Turenne</a></li>
            <li><a href="#" className="hover:underline">Tokyo // Minami-Aoyama</a></li>
            <li><a href="#" className="hover:underline">New York // Walker St</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest font-bold mb-4">Dispatch</h4>
          <p className="text-xs font-mono text-zinc-600 mb-4">Receive private quarterly monographs.</p>
          <div className="flex border border-black">
            <input type="email" placeholder="ENTER EMAIL" className="p-2 text-xs font-mono w-full outline-none bg-transparent" />
            <button className="bg-black text-white px-4 text-xs font-mono uppercase">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-black px-4 py-4 text-center text-[10px] font-mono uppercase text-zinc-500">
        &copy; 2026 VAULT EDITORIAL. PRINTED IN FRANCE &amp; JAPAN.
      </div>
    </footer>
  );
}

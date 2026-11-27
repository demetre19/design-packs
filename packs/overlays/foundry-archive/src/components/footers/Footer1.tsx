import React from 'react';
import { BookOpen, Shield } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-400 py-16 px-6 font-mono border-t border-neutral-800 text-xs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="text-white font-serif font-bold text-base mb-4 tracking-wider">TYPOGRAPHICA ARCHIV</div>
          <p className="text-[11px] font-sans leading-relaxed text-neutral-500 mb-4">
            Preserving classical metal type legacies through rigorous digital vector restoration and historical scholarship.
          </p>
          <div className="text-[10px] text-neutral-600">EST. 1957 // BASEL & PARIS</div>
        </div>
        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">COLLECTIONS</div>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#bodoni" className="hover:text-white">Bodoni Époque</a></li>
            <li><a href="#grotesk" className="hover:text-white">Grotesk Schrift</a></li>
            <li><a href="#garamond" className="hover:text-white">Garamond Archivale</a></li>
            <li><a href="#univers" className="hover:text-white">Univers Études</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">VAULT INDEX</div>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#plates" className="hover:text-white">Copperplate Strikes</a></li>
            <li><a href="#matrices" className="hover:text-white">Lead Matrices</a></li>
            <li><a href="#specimens" className="hover:text-white">Foundry Books</a></li>
            <li><a href="#licenses" className="hover:text-white">Acquisition Tiers</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">CURATORIAL OFFICE</div>
          <p className="text-[11px] font-sans text-neutral-500 mb-2">
            Cabinet 12, Musée de la Typographie, Basel, Switzerland.
          </p>
          <div className="text-[10px] text-neutral-600">INQUIRIES: ARCHIVE@TYPOGRAPHICA.ORG</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-600">
        <div>© 1957–2026 TYPOGRAPHICA ARCHIV. ALL RIGHTS RESERVED.</div>
        <div className="mt-4 sm:mt-0 flex space-x-6">
          <a href="#privacy" className="hover:text-neutral-400">PRIVACY POLICY</a>
          <a href="#terms" className="hover:text-neutral-400">TERMS OF ACQUISITION</a>
          <a href="#colophon" className="hover:text-neutral-400">COLOPHON</a>
        </div>
      </div>
    </footer>
  );
}

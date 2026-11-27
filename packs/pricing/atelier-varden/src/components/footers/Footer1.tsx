import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#16171a] text-[#fafaf8] py-16 lg:py-20 font-sans">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-stone-800">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="font-medium text-lg tracking-tight">ATELIER VARDEN</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            Resolute architectural practice operating across Zürich, Tokyo, and Stockholm.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#b5482e]">Locations</div>
          <ul className="space-y-2 text-xs font-mono text-stone-300">
            <li>Zürichbergstrasse 44, Zürich</li>
            <li>Minami-Aoyama 3-chome, Tokyo</li>
            <li>Strandvägen 12, Stockholm</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#b5482e]">Navigation</div>
          <ul className="space-y-2 text-xs font-mono text-stone-300">
            <li><a href="#works" className="hover:text-[#b5482e] transition-colors">Selected Works</a></li>
            <li><a href="#practice" className="hover:text-[#b5482e] transition-colors">Practice & Tenets</a></li>
            <li><a href="#monographs" className="hover:text-[#b5482e] transition-colors">Monographs</a></li>
            <li><a href="#inquire" className="hover:text-[#b5482e] transition-colors">Direct Commission</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#b5482e]">Direct Contact</div>
          <p className="text-xs font-mono text-stone-300">atelier@varden.arch</p>
          <p className="text-xs font-mono text-stone-400">+41 44 211 88 00</p>
          <div className="pt-2">
            <a href="#inquire" className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-[#fafaf8] border-b border-[#fafaf8] pb-1 hover:text-[#b5482e] hover:border-[#b5482e]">
              <span>Commission Inquiry</span>
              <ArrowUpRight className="w-3 h-3 text-[#b5482e]" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-stone-500">
        <div>© 2012–2026 ATELIER VARDEN ARCHITECTS. ALL RIGHTS RESERVED.</div>
        <div className="mt-4 sm:mt-0 flex space-x-6">
          <a href="#privacy" className="hover:text-stone-300">PRIVACY</a>
          <a href="#legal" className="hover:text-stone-300">LEGAL NOTICE</a>
        </div>
      </div>
    </footer>
  );
}

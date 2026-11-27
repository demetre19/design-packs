import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#fafaf8] border-t border-[#e2e0d8] py-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="bg-[#f0efeb] border border-[#e2e0d8] p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">COMMISSION INQUIRIES</span>
            </div>
            <h3 className="text-2xl font-medium text-[#16171a]">Ready to discuss your residential commission?</h3>
          </div>
          <a href="#contact" className="inline-flex items-center space-x-2 bg-[#b5482e] text-[#fafaf8] px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors rounded-none">
            <span>Direct Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-stone-500 pt-6 border-t border-[#e2e0d8]">
          <div className="flex items-center space-x-3">
            <span className="font-medium text-[#16171a]">ATELIER VARDEN</span>
            <span>—</span>
            <span>ZÜRICH / TOKYO / STOCKHOLM</span>
          </div>
          <div className="mt-4 sm:mt-0">
            © 2026 ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}

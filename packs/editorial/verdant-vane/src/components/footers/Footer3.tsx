import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#e8f0ec] py-20 px-6 border-t border-[#122420]/10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#faf6f0] rounded-[32px] p-8 md:p-12 shadow-sm mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-2">
              The Editorial Dispatch
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#122420]">
              Receive our quarterly essays on clinical wellness.
            </h3>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full bg-[#e8f0ec] border border-[#122420]/15 text-sm text-[#122420] focus:outline-none focus:border-[#2a7a6d] w-full md:w-72"
            />
            <button className="px-6 py-3 rounded-full bg-[#1d4f47] text-[#faf6f0] text-sm font-medium hover:bg-[#153b34] transition-all flex-shrink-0 flex items-center gap-2">
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#122420]/70">
          <div className="font-serif text-xl text-[#122420]">Verdant & Vane</div>
          <div className="flex gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div>© 2026 Verdant & Vane Studio</div>
        </div>
      </div>
    </footer>
  );
}

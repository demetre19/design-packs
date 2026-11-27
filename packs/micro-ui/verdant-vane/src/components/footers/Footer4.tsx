import React from 'react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#faf6f0] pt-24 pb-12 px-6 border-t border-[#122420]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-[#122420]/15">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold mb-3">Studio Headquarters</p>
            <p className="font-serif text-lg text-[#122420]">Bahnhofstrasse 44</p>
            <p className="text-[#122420]/80 font-light text-sm">8001 Zurich, Switzerland</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold mb-3">Direct Inquiries</p>
            <p className="font-serif text-lg text-[#122420]">concierge@verdantvane.com</p>
            <p className="text-[#122420]/80 font-light text-sm">+41 44 211 88 90</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold mb-3">Global Practices</p>
            <p className="font-serif text-lg text-[#122420]">Zurich • London • New York</p>
            <p className="text-[#122420]/80 font-light text-sm">By Appointment Only</p>
          </div>
        </div>

        {/* Big Wordmark */}
        <div className="py-12 text-center">
          <h1 className="font-serif text-6xl md:text-9xl text-[#122420]/15 tracking-tighter select-none">
            Verdant & Vane
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#122420]/60 pt-8 border-t border-[#122420]/10">
          <p>© 2026 Verdant & Vane Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

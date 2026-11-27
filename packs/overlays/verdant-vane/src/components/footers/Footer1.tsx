import React from 'react';
import { Leaf } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#1d4f47] text-[#faf6f0] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#faf6f0]/15">
        <div className="md:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#1d4f47]">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl tracking-tight">Verdant & Vane</span>
          </div>
          <p className="text-[#faf6f0]/80 font-light text-sm max-w-sm leading-relaxed mb-6">
            Elevating clinical wellness and longevity practices through thoughtful brand architecture, somatic spatial design, and evidence-based patient journeys.
          </p>
          <p className="text-xs uppercase tracking-widest text-[#faf6f0]/60">© 2026 Verdant & Vane Studio. All rights reserved.</p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-widest text-[#faf6f0]/60 font-semibold mb-4">Practices</p>
          <ul className="space-y-3 text-sm text-[#faf6f0]/90">
            <li><a href="#clinical" className="hover:text-[#faf6f0] transition-colors">Integrative Medicine</a></li>
            <li><a href="#branding" className="hover:text-[#faf6f0] transition-colors">Brand Architecture</a></li>
            <li><a href="#spatial" className="hover:text-[#faf6f0] transition-colors">Spatial Design</a></li>
            <li><a href="#retreats" className="hover:text-[#faf6f0] transition-colors">Executive Health</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-widest text-[#faf6f0]/60 font-semibold mb-4">Studio</p>
          <ul className="space-y-3 text-sm text-[#faf6f0]/90">
            <li><a href="#philosophy" className="hover:text-[#faf6f0] transition-colors">Philosophy</a></li>
            <li><a href="#founders" className="hover:text-[#faf6f0] transition-colors">Our Team</a></li>
            <li><a href="#journal" className="hover:text-[#faf6f0] transition-colors">Journal</a></li>
            <li><a href="#careers" className="hover:text-[#faf6f0] transition-colors">Careers</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-[#faf6f0]/60 font-semibold mb-4">Inquiries</p>
          <p className="text-sm text-[#faf6f0]/90 mb-4 font-light">Schedule an initial confidential consultation with our principal strategists.</p>
          <a href="#contact" className="inline-block px-5 py-2.5 rounded-full bg-[#faf6f0] text-[#1d4f47] text-sm font-medium hover:bg-[#faf6f0]/90 transition-all">
            Inquire Now
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-wrap justify-between items-center text-xs text-[#faf6f0]/60">
        <div className="flex gap-6">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
          <a href="#ethics" className="hover:underline">Clinical Ethics</a>
        </div>
        <div>Geneva • Zurich • London • New York</div>
      </div>
    </footer>
  );
}

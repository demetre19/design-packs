import React from 'react';
import { Terminal, Shield } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111] text-[10px]">
          <div className="p-6 space-y-3">
            <div className="flex items-center space-x-2 font-black">
              <Shield className="w-4 h-4" />
              <span>KRAFTWERK // VGH</span>
            </div>
            <p className="text-[9px] text-[#666]">Stuttgart-Tokyo Motor Homologation Archive & Engineering Lab.</p>
          </div>
          <div className="p-6 space-y-2">
            <span className="font-bold block text-[9px] text-[#666]">[01. INDEX]</span>
            <ul className="space-y-1 text-[#444]">
              <li><a href="#" className="hover:underline">Chassis Specs</a></li>
              <li><a href="#" className="hover:underline">Aerodynamics</a></li>
              <li><a href="#" className="hover:underline">Powertrain</a></li>
            </ul>
          </div>
          <div className="p-6 space-y-2">
            <span className="font-bold block text-[9px] text-[#666]">[02. COMPLIANCE]</span>
            <ul className="space-y-1 text-[#444]">
              <li><a href="#" className="hover:underline">FIA Annex J</a></li>
              <li><a href="#" className="hover:underline">ISO 9001 Lab</a></li>
              <li><a href="#" className="hover:underline">Safety Audits</a></li>
            </ul>
          </div>
          <div className="p-6 space-y-3 bg-[#f8f8f6]">
            <span className="font-bold block text-[9px] text-[#666]">[03. BARCODE VERIFICATION]</span>
            <div className="h-6 w-full bg-[repeating-linear-gradient(90deg,#111,#111_2px,#e8e8e6_2px,#e8e8e6_5px)] border border-[#111]" />
            <span className="text-[8px] text-[#888] block">REF: 9942-8810-KW</span>
          </div>
        </div>

        <div className="border-t border-[#111] p-4 bg-[#e8e8e6] flex flex-col sm:flex-row justify-between items-center text-[9px]">
          <span>© 2026 KRAFTWERK ARCHIVE SYSTEM. ALL RIGHTS RESERVED.</span>
          <span>STUTTGART // TOKYO // ZURICH</span>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Terminal } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full bg-[#111111] text-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border border-[#e8e8e6] p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[10px]">
          <div>
            <div className="font-black text-xs uppercase mb-3 flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>KRAFTWERK // BLACK</span>
            </div>
            <p className="text-[#aaa] text-[9px]">Uncompromising technical documentation archive in strict monochrome ink.</p>
          </div>
          <div>
            <span className="font-bold block mb-2 text-[#ccc]">[NAVIGATE]</span>
            <ul className="space-y-1 text-[#aaa]">
              <li><a href="#" className="hover:underline">Specifications</a></li>
              <li><a href="#" className="hover:underline">Telemetry Feed</a></li>
              <li><a href="#" className="hover:underline">Allocations</a></li>
            </ul>
          </div>
          <div>
            <span className="font-bold block mb-2 text-[#ccc]">[LEGAL]</span>
            <ul className="space-y-1 text-[#aaa]">
              <li><a href="#" className="hover:underline">Homologation Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy Dossier</a></li>
              <li><a href="#" className="hover:underline">Security Protocols</a></li>
            </ul>
          </div>
          <div>
            <span className="font-bold block mb-2 text-[#ccc]">[STATUS]</span>
            <span className="text-xs font-bold text-green-400 block mb-1">SYSTEM ONLINE</span>
            <span className="text-[9px] text-[#888]">NODE STUTTGART-04</span>
          </div>
        </div>

        <div className="border-t border-[#333] mt-8 pt-4 flex justify-between text-[9px] text-[#888]">
          <span>© 2026 KRAFTWERK ARCHIVE. REVERSED INVERSION FOOTER.</span>
          <span>VGH-99-REV</span>
        </div>
      </div>
    </footer>
  );
}

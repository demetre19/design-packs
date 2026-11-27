import React from 'react';
import { Shield, Database, Download } from 'lucide-react';

export function Navbar2() {
  return (
    <header className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none">
      {/* Barcode Accent Strip */}
      <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,#111,#111_3px,#e8e8e6_3px,#e8e8e6_6px)] border-b border-[#111111]" />
      
      <div className="px-4 py-2 flex items-center justify-between text-[10px] uppercase tracking-widest">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 font-black">
            <Shield className="w-4 h-4" />
            <span>KRAFTWERK VGH-99</span>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-[#555]">
            <span>LOC: STUTTGART</span>
            <span>REV: 2026.4</span>
            <span>SEC: UNRESTRICTED</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#archive" className="hover:underline">ARCHIVE</a>
            <a href="#telemetry" className="hover:underline">TELEMETRY</a>
            <a href="#index" className="hover:underline">INDEX</a>
          </nav>
          <button 
            onClick={() => alert('Downloading PDF homologation sheet...')}
            className="px-3 py-1 bg-[#111111] text-[#e8e8e6] flex items-center space-x-1 hover:bg-[#333] transition-colors cursor-pointer"
          >
            <Download className="w-3 h-3" />
            <span>PDF SPEC</span>
          </button>
        </div>
      </div>
    </header>
  );
}

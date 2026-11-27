import React from 'react';
import { Terminal, Radio } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#16181d] border-t border-[#2a2d35] text-white font-mono py-12 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-[#ff3d00]" />
            <span className="text-sm font-black tracking-tighter uppercase font-sans">VANGUARD <span className="text-[#ff3d00]">CORP</span></span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Experimental aerospace research, hypersonic propulsion systems, and advanced telemetry bays.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase mb-4">PROGRAMS</h3>
          <ul className="space-y-2 text-xs text-zinc-300">
            <li><a href="#" className="hover:text-[#ff3d00]">X-99 Spectre</a></li>
            <li><a href="#" className="hover:text-[#ff3d00]">Valkyrie Mk.IV</a></li>
            <li><a href="#" className="hover:text-[#ff3d00]">Ramjet Dynamics</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase mb-4">TELEMETRY</h3>
          <ul className="space-y-2 text-xs text-zinc-300">
            <li><a href="#" className="hover:text-[#ff3d00]">Sortie Register S-01..12</a></li>
            <li><a href="#" className="hover:text-[#ff3d00]">Wind Tunnel CFD</a></li>
            <li><a href="#" className="hover:text-[#ff3d00]">Secure Downlink</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase mb-4">FACILITY</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Area 51, Nevada Test Range<br />
            Bay 4 Command Center<br />
            Secure Freq: 409.2 MHz
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#2a2d35] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
        <div>© 2026 VANGUARD HYPERSONICS. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0 text-[#ff3d00]">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>TRANSPONDER ACTIVE // M 3.84</span>
        </div>
      </div>
    </footer>
  );
}

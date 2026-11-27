import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="bg-[#101114] border-t border-[#272a33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#ff5a1f] clip-corner flex items-center justify-center font-bold text-black">
                A
              </div>
              <span className="font-extrabold text-lg tracking-tighter text-white">APEX MOTIVE</span>
            </div>
            <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">
              Engineered for absolute high-performance electric superbike supremacy.
            </p>
          </div>

          <div>
            <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-4">MACHINES</span>
            <ul className="space-y-2 font-mono-spec text-xs text-neutral-400">
              <li><a href="#v12" className="hover:text-[#ff5a1f] transition-colors">APEX-V12 R</a></li>
              <li><a href="#x" className="hover:text-[#ff5a1f] transition-colors">APEX-X SUPERSTOCK</a></li>
              <li><a href="#vortex" className="hover:text-[#ff5a1f] transition-colors">VORTEX GT-9</a></li>
              <li><a href="#typhoon" className="hover:text-[#ff5a1f] transition-colors">TYPHOON ZERO</a></li>
            </ul>
          </div>

          <div>
            <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-4">TELEMETRY</span>
            <ul className="space-y-2 font-mono-spec text-xs text-neutral-400">
              <li><a href="#dyno" className="hover:text-[#ff5a1f] transition-colors">Dyno Curves</a></li>
              <li><a href="#thermal" className="hover:text-[#ff5a1f] transition-colors">Thermal Logs</a></li>
              <li><a href="#firmware" className="hover:text-[#ff5a1f] transition-colors">OTA Firmware</a></li>
              <li><a href="#manuals" className="hover:text-[#ff5a1f] transition-colors">Service Manuals</a></li>
            </ul>
          </div>

          <div>
            <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-4">NEWSLETTER</span>
            <p className="font-mono-spec text-xs text-neutral-400 mb-4">Receive confidential track telemetry and batch release windows.</p>
            <div className="flex">
              <input type="email" placeholder="ENTER EMAIL" className="bg-[#16181d] border border-[#272a33] px-4 py-2 font-mono-spec text-xs text-white focus:outline-none focus:border-[#ff5a1f] clip-corner w-full" />
              <button className="bg-[#ff5a1f] text-black px-4 py-2 clip-corner hover:bg-white transition-colors cursor-pointer">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#272a33] flex flex-col md:flex-row justify-between items-center font-mono-spec text-xs text-neutral-500">
          <div>© 2026 APEX MOTIVE INC. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-[#ff5a1f]">PRIVACY PROTOCOL</a>
            <a href="#terms" className="hover:text-[#ff5a1f]">TERMS OF ENGAGEMENT</a>
            <a href="#security" className="hover:text-[#ff5a1f]">SECURITY ENCRYPTION</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

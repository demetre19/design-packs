import React, { useState } from 'react';
import { Menu, X, Terminal, Cpu, Activity, ShieldAlert } from 'lucide-react';

export function Navbar4() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0c0d0f] border-b border-[#22262f] px-6 py-4 flex items-center justify-between text-white font-mono z-50 relative">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-[#ffd500]" />
          <span className="font-extrabold tracking-widest text-sm">KERSHAW DYNAMICS // CH-04</span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#14161a] border border-[#262c36] p-2 text-[#ffd500] hover:bg-[#ffd500] hover:text-black transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-[61px] bg-[#0c0d0f]/98 z-40 p-8 flex flex-col justify-between font-mono text-white animate-fadeIn">
          <div className="max-w-4xl mx-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div>
              <h3 className="text-xs text-[#ffd500] tracking-widest mb-4">// NAVIGATION CHANNELS</h3>
              <ul className="space-y-4 text-xl font-extrabold tracking-wider">
                <li><a href="#dyno" onClick={() => setMenuOpen(false)} className="hover:text-[#ffd500] transition-colors">01. DYNO TEST CELLS</a></li>
                <li><a href="#telemetry" onClick={() => setMenuOpen(false)} className="hover:text-[#ffd500] transition-colors">02. LIVE TELEMETRY</a></li>
                <li><a href="#powertrain" onClick={() => setMenuOpen(false)} className="hover:text-[#ffd500] transition-colors">03. POWERTRAIN ARCHITECTURE</a></li>
                <li><a href="#archive" onClick={() => setMenuOpen(false)} className="hover:text-[#ffd500] transition-colors">04. RUN ARCHIVE REGISTERS</a></li>
              </ul>
            </div>
            <div className="bg-[#14161a] border border-[#262c36] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-zinc-400">TEST CELL STATUS</span>
                <h4 className="text-lg font-bold text-[#ffd500] mt-1">RUN 07/40 ACTIVE</h4>
                <p className="text-xs text-zinc-400 mt-2">All sensors calibrated. Peak torque threshold locked at 612 NM @ 6,800 RPM.</p>
              </div>
              <div className="pt-6 border-t border-[#262c36] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>OPERATOR: K. VANCE</span>
                <span className="text-[#ffd500]">SECURE LINK</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

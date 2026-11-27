import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#0d0e10] text-white py-16 px-6 font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#2743f0]" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">STRATA GRID SYSTEMS</span>
          </div>
          <div className="flex flex-wrap items-center gap-8 font-mono text-[11px] uppercase tracking-wider text-white/70">
            <a href="#platform" className="hover:text-[#2743f0] transition-colors">Platform</a>
            <a href="#telemetry" className="hover:text-[#2743f0] transition-colors">Telemetry</a>
            <a href="#register" className="hover:text-[#2743f0] transition-colors">Register</a>
            <a href="#security" className="hover:text-[#2743f0] transition-colors">Security</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-[10px] text-white/50">
          <div>© 2026 STRATA GRID SYSTEMS INC. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <span>ISO-27001 CERTIFIED</span>
            <span>NIST SP 800-53</span>
            <span className="text-[#2743f0] font-bold">SYSTEM ACTIVE ↗</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

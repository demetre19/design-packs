import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-white py-12 px-6 font-sans text-[#0d0e10] border-t border-[#0d0e10]/10 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#2743f0]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">STRATA GRID OS</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-[#0d0e10]/70 flex items-center gap-6">
          <a href="#platform" className="hover:text-[#2743f0] transition-colors">Platform</a>
          <a href="#telemetry" className="hover:text-[#2743f0] transition-colors">Telemetry</a>
          <a href="#security" className="hover:text-[#2743f0] transition-colors">Security</a>
          <a href="#contact" className="hover:text-[#2743f0] transition-colors">Contact</a>
        </div>
        <div className="font-mono text-[10px] text-[#0d0e10]/40 pt-2">
          [FTR-03 // SYSTEM OPERATIONAL]
        </div>
      </div>
    </footer>
  );
}

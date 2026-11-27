import React from 'react';

export function Footer1() {
  return (
    <footer className="bg-[#0c0d0f] text-white py-16 px-6 border-t border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-sm font-extrabold uppercase tracking-widest text-white">KERSHAW DYNAMICS</span>
          <p className="text-xs text-zinc-500 font-sans mt-1">High-performance engine dyno telemetry lab. Cell 04 active.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-zinc-400">
          <a href="#engineering" className="hover:text-[#ffd500] transition-colors">ENGINEERING</a>
          <a href="#telemetry" className="hover:text-[#ffd500] transition-colors">TELEMETRY</a>
          <a href="#programs" className="hover:text-[#ffd500] transition-colors">PROGRAMS</a>
          <a href="#contact" className="hover:text-[#ffd500] transition-colors">CONTACT</a>
        </div>
        <span className="text-xs text-zinc-600">© 2026 KERSHAW. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}

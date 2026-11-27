import React from 'react';

export function Footer4() {
  return (
    <footer className="bg-black text-white border-t-4 border-[#f25c05] font-mono text-xs select-none">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 bg-[#f25c05]"></span>
          <span className="font-sans font-black tracking-tighter uppercase text-sm">TITAN FORGE INDUSTRIAL // 04</span>
        </div>

        <div className="flex items-center space-x-6 text-[11px] text-neutral-400 uppercase">
          <a href="#privacy" className="hover:text-[#f25c05]">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#f25c05]">Enterprise Terms</a>
          <a href="#telemetry" className="hover:text-[#f25c05]">Telemetry Logs</a>
        </div>

        <div className="text-[10px] text-neutral-500 uppercase">
          © 2026 TITAN FORGE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

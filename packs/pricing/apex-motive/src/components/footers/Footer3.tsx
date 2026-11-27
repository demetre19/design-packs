import React from 'react';

export function Footer3() {
  return (
    <footer className="bg-[#101114] border-t border-[#272a33] py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center font-mono-spec text-xs text-neutral-400">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="text-[#ff5a1f] font-bold">INDEX // F-03</span>
          <span>APEX MOTIVE MACHINE SYSTEMS</span>
        </div>
        <div className="flex gap-8">
          <a href="#specs" className="hover:text-[#ff5a1f]">SPECS</a>
          <a href="#telemetry" className="hover:text-[#ff5a1f]">TELEMETRY</a>
          <a href="#legal" className="hover:text-[#ff5a1f]">LEGAL</a>
        </div>
      </div>
    </footer>
  );
}

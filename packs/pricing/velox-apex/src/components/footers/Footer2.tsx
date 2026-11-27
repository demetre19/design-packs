import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-white text-black py-16 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* One massive contact word */}
        <div className="text-6xl sm:text-9xl font-black uppercase tracking-tighter leading-none mb-12 text-black">
          CONNECT <span className="text-[#ff2e00]">NOW</span>
        </div>

        {/* Tiny precise columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-xs border-t border-black pt-8">
          <div>
            <div className="text-[#ff2e00] font-bold mb-3">// 01. MACHINES</div>
            <ul className="space-y-1 text-neutral-600">
              <li>VX-Roadster</li>
              <li>Track Predator</li>
              <li>Factory Edition</li>
            </ul>
          </div>
          <div>
            <div className="text-[#ff2e00] font-bold mb-3">// 02. TELEMETRY</div>
            <ul className="space-y-1 text-neutral-600">
              <li>Live ECU Feed</li>
              <li>Solid-State Specs</li>
              <li>Aero Downforce</li>
            </ul>
          </div>
          <div>
            <div className="text-[#ff2e00] font-bold mb-3">// 03. LEGAL</div>
            <ul className="space-y-1 text-neutral-600">
              <li>Privacy Matrix</li>
              <li>Terms of Allocation</li>
              <li>Safety ISO-9001</li>
            </ul>
          </div>
          <div>
            <div className="text-[#ff2e00] font-bold mb-3">// 04. DISPATCH</div>
            <p className="text-neutral-600 mb-2">Tokyo Dock #4</p>
            <p className="text-black font-bold">CONTACT@VELOXAPEX.SYS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar4() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter uppercase">
          V // APEX
        </div>

        {/* Oversized hamburger target */}
        <button 
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 border-2 border-black px-5 py-3 bg-[#ff2e00] text-black hover:bg-black hover:text-white transition-all cursor-pointer"
        >
          <span className="font-mono text-xs tracking-widest font-black uppercase">
            {open ? 'CLOSE SYSTEM' : 'SYSTEM MENU'}
          </span>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="bg-black text-white p-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs border-t-2 border-black">
          <div>
            <div className="text-[#ff2e00] font-bold mb-2">// 01. MACHINES</div>
            <ul className="space-y-1 text-neutral-400">
              <li className="hover:text-white cursor-pointer">VX-R Roadster</li>
              <li className="hover:text-white cursor-pointer">Apex Track Spec</li>
              <li className="hover:text-white cursor-pointer">Hyper-Charge Edition</li>
            </ul>
          </div>
          <div>
            <div className="text-[#ff2e00] font-bold mb-2">// 02. TECHNOLOGY</div>
            <ul className="space-y-1 text-neutral-400">
              <li className="hover:text-white cursor-pointer">Solid State Cells</li>
              <li className="hover:text-white cursor-pointer">Aero Carbon Monocoque</li>
              <li className="hover:text-white cursor-pointer">Neural Traction Control</li>
            </ul>
          </div>
          <div>
            <div className="text-[#ff2e00] font-bold mb-2">// 03. COMMAND</div>
            <p className="text-neutral-400 mb-4">Direct telemetry access and custom build dispatch.</p>
            <button className="bg-[#ff2e00] text-black font-black px-4 py-2 uppercase text-[11px] tracking-wider w-full">
              INITIALIZE BUILD
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

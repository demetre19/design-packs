import React from 'react';

export function Footer2() {
  return (
    <footer className="w-full bg-[#16181d] border-t border-[#2a2d35] text-white font-mono py-12 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] text-xs">
          <div>
            <div className="text-zinc-400 text-[10px]">MACH READOUT</div>
            <div className="font-black text-[#ff3d00] text-lg">M 3.84</div>
          </div>
          <div>
            <div className="text-zinc-400 text-[10px]">ALTITUDE</div>
            <div className="font-black text-white text-lg">FL580</div>
          </div>
          <div>
            <div className="text-zinc-400 text-[10px]">G-LOAD</div>
            <div className="font-black text-white text-lg">+5.6 G</div>
          </div>
          <div>
            <div className="text-zinc-400 text-[10px]">TRANSPONDER</div>
            <div className="font-black text-[#ff3d00] text-lg">ACTIVE</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 border-t border-[#2a2d35] pt-6">
          <div>VANGUARD HYPERSONICS // TELEMETRY FOOTER</div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#ff3d00]">PRIVACY</a>
            <a href="#" className="hover:text-[#ff3d00]">SECURITY</a>
            <a href="#" className="hover:text-[#ff3d00]">DISPATCH</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

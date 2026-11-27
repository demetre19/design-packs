import React from 'react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#16181d] border-t border-[#2a2d35] text-white font-mono py-8 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs">
        <div className="flex items-center space-x-3">
          <span className="bg-[#ff3d00] text-black font-black px-2 py-0.5">INDEX</span>
          <span className="text-zinc-400">VANGUARD HYPERSONICS // MINIMAL FOOTER</span>
        </div>
        <div className="text-zinc-500 mt-4 sm:mt-0">
          SYS.VER: 4.8.2 // SECURE
        </div>
      </div>
    </footer>
  );
}

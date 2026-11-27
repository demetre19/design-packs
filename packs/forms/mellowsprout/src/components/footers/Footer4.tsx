import React from 'react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#fdf3e7] py-20 px-6 border-t-2 border-[#3d2530]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-black text-[#3d2530]">MellowSprout Studio</h2>
          <p className="text-[#3d2530]/70 font-medium">Crafting the future of playful discovery.</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <span className="px-5 py-2 rounded-full bg-white text-[#3d2530] font-black border-2 border-[#3d2530]/10 shadow-sm">📍 San Francisco, CA</span>
          <span className="px-5 py-2 rounded-full bg-white text-[#3d2530] font-black border-2 border-[#3d2530]/10 shadow-sm">📧 hello@mellowsprout.com</span>
        </div>
      </div>
    </footer>
  );
}

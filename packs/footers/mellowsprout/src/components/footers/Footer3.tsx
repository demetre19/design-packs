import React from 'react';
import { Sparkles, Send } from 'lucide-react';

export function Footer3() {
  return (
    <footer className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[#ff8c42] p-12 rounded-[40px] shadow-2xl border-4 border-[#3d2530] text-center text-white space-y-6">
        <h2 className="text-4xl font-black">Never Miss a Play Update</h2>
        <p className="font-medium max-w-lg mx-auto">Get creative play tips delivered straight to your inbox every Thursday morning.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-full bg-white text-[#3d2530] placeholder-[#3d2530]/50 font-bold focus:outline-none shadow-md" />
          <button className="px-8 py-4 rounded-full bg-[#3d2530] text-white font-black shadow-lg hover:bg-[#2c1a22] flex items-center justify-center gap-2">
            Subscribe <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

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

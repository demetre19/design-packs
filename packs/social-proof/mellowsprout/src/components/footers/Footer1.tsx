import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export function Footer1() {
  return (
    <footer className="w-full bg-[#3d2530] text-[#fdf3e7] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ff8c42] flex items-center justify-center text-white font-black shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black">MellowSprout</span>
          </div>
          <p className="text-sm opacity-80 font-medium">Spreading joy and creative wonder to every family worldwide.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-black text-[#ff8c42] uppercase tracking-wider text-sm">Exploration</h4>
          <ul className="space-y-2 text-sm opacity-80 font-bold">
            <li><a href="#" className="hover:text-white">Play Kits</a></li>
            <li><a href="#" className="hover:text-white">Workshops</a></li>
            <li><a href="#" className="hover:text-white">Storybooks</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-black text-[#5ba8e8] uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-2 text-sm opacity-80 font-bold">
            <li><a href="#" className="hover:text-white">Our Story</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press Kit</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-black text-[#f975a3] uppercase tracking-wider text-sm">Stay Connected</h4>
          <p className="text-sm opacity-80 font-medium">Join 45k+ parents receiving weekly play ideas.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 text-sm focus:outline-none" />
            <button className="px-5 py-2 rounded-full bg-[#ff8c42] text-white font-black text-sm shadow-md">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

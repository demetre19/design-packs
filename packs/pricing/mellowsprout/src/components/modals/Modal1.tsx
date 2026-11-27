import React from 'react';
import { X, Sparkles } from 'lucide-react';

export function Modal1() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6 flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-8 rounded-[40px] shadow-2xl border-4 border-[#3d2530] relative space-y-6">
        <div className="absolute -top-4 -right-4 bg-[#f975a3] text-white px-4 py-1.5 rounded-full font-black text-xs border-2 border-[#3d2530] rotate-6 shadow-md">
          Special Offer 🎉
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#ff8c42]" />
            <h3 className="text-2xl font-black text-[#3d2530]">Unlock 20% Off!</h3>
          </div>
          <button className="p-2 rounded-full bg-[#fdf3e7] text-[#3d2530] font-bold"><X className="w-5 h-5" /></button>
        </div>
        <p className="text-[#3d2530]/80 font-medium">Join our community club today and get your first sensory play kit at a massive discount.</p>
        <button className="w-full py-4 rounded-full bg-[#ff8c42] text-white font-black shadow-lg hover:bg-[#e07733] transition-all">
          Claim My Discount ✨
        </button>
      </div>
    </section>
  );
}

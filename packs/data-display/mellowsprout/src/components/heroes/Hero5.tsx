import React from 'react';
import { Sparkles, Trophy, Users, Smile } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff8c42]/20 text-[#d66a20] font-black text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> award-winning play system
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#3d2530] leading-tight">
            Sparking joy in every single box.
          </h1>
          <p className="text-lg text-[#3d2530]/80 font-medium">
            Join thousands of happy families who trust MellowSprout for screen-free, creative playtime every month.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-full bg-[#5ba8e8] text-white font-extrabold text-lg shadow-xl shadow-[#5ba8e8]/30 hover:bg-[#4695d6] transition-all border-b-4 border-[#327bb8]">
              Get Started Now 🚀
            </button>
          </div>
        </div>

        {/* Tall Blob-Masked Image Right */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#f975a3]/30 rounded-[60px] transform rotate-3"></div>
          <div className="relative bg-white p-4 rounded-[48px] shadow-2xl border-4 border-[#3d2530] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80" 
              alt="Happy child learning" 
              className="w-full h-[400px] object-cover rounded-[36px]"
            />
          </div>
        </div>
      </div>

      {/* Stat Pills Bottom */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-[#3d2530]/10 text-center transform hover:-translate-y-1 transition-all">
          <Trophy className="w-8 h-8 text-[#ff8c42] mx-auto mb-2" />
          <div className="text-3xl font-black text-[#3d2530]">15+</div>
          <div className="text-sm font-bold text-[#3d2530]/60">Design Awards</div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-[#3d2530]/10 text-center transform hover:-translate-y-1 transition-all">
          <Users className="w-8 h-8 text-[#5ba8e8] mx-auto mb-2" />
          <div className="text-3xl font-black text-[#3d2530]">45,000</div>
          <div className="text-sm font-bold text-[#3d2530]/60">Active Kids</div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-[#3d2530]/10 text-center transform hover:-translate-y-1 transition-all">
          <Smile className="w-8 h-8 text-[#f975a3] mx-auto mb-2" />
          <div className="text-3xl font-black text-[#3d2530]">99%</div>
          <div className="text-sm font-bold text-[#3d2530]/60">Parent Joy Rate</div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-[#3d2530]/10 text-center transform hover:-translate-y-1 transition-all">
          <Sparkles className="w-8 h-8 text-[#6dbf67] mx-auto mb-2" />
          <div className="text-3xl font-black text-[#3d2530]">100%</div>
          <div className="text-sm font-bold text-[#3d2530]/60">Screen-Free</div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export function Hero4() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6dbf67]/20 text-[#438a3d] font-black text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> certified happy learning
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#3d2530] leading-tight">
            Crafting joyful memories together!
          </h1>
          <p className="text-lg text-[#3d2530]/80 font-medium">
            Explore our rotating sticker frames, sensory play dough, and guided storybooks crafted by childhood educators.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-full bg-[#f975a3] text-white font-extrabold text-lg shadow-xl shadow-[#f975a3]/30 hover:bg-[#e05f8d] transition-all border-b-4 border-[#c74974]">
              Start Exploring 🎈
            </button>
          </div>
        </div>

        {/* Photo Collage of Rotated Sticker Frames */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="absolute top-4 left-4 w-48 bg-white p-3 rounded-2xl shadow-xl border-4 border-[#3d2530] transform -rotate-12 z-20">
            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80" alt="Craft" className="w-full h-32 object-cover rounded-xl" />
            <div className="text-center font-black text-xs mt-2 text-[#3d2530]">🎨 Art Kit</div>
          </div>
          <div className="absolute top-12 right-6 w-52 bg-white p-3 rounded-2xl shadow-xl border-4 border-[#3d2530] transform rotate-12 z-30">
            <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80" alt="Nature" className="w-full h-36 object-cover rounded-xl" />
            <div className="text-center font-black text-xs mt-2 text-[#3d2530]">🌱 Nature Lab</div>
          </div>
          <div className="absolute bottom-4 left-1/4 w-56 bg-white p-3 rounded-2xl shadow-xl border-4 border-[#3d2530] transform rotate-3 z-10">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80" alt="Story" className="w-full h-32 object-cover rounded-xl" />
            <div className="text-center font-black text-xs mt-2 text-[#3d2530]">📚 Story Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}

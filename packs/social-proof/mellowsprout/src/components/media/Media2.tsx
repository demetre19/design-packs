import React from 'react';
import { Play } from 'lucide-react';

export function Media2() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-[#3d2530] transform -rotate-3">
          <img src="https://images.unsplash.com/photo-1596464019199-ef038b30e013?w=600&auto=format&fit=crop&q=80" alt="Collage 1" className="w-full h-48 object-cover rounded-2xl" />
          <div className="font-black text-center mt-3 text-[#3d2530]">🎨 Painting Session</div>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-[#3d2530] transform rotate-2">
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=80" alt="Collage 2" className="w-full h-48 object-cover rounded-2xl" />
          <div className="font-black text-center mt-3 text-[#3d2530]">🧩 Puzzle Fun</div>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-[#3d2530] transform -rotate-2">
          <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80" alt="Collage 3" className="w-full h-48 object-cover rounded-2xl" />
          <div className="font-black text-center mt-3 text-[#3d2530]">🌱 Nature Lab</div>
        </div>
      </div>
    </section>
  );
}

export function Media3() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#3d2530] bg-[#3d2530] h-96 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1200&auto=format&fit=crop&q=80" alt="Video cover" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <button className="relative z-10 w-24 h-24 rounded-full bg-[#ff8c42] text-white flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
          <Play className="w-10 h-10 fill-current ml-1" />
        </button>
      </div>
    </section>
  );
}

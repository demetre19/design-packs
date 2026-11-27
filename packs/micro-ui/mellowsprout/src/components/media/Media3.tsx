import React from 'react';
import { Play } from 'lucide-react';

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

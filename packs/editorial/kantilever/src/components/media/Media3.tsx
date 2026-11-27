import React from 'react';
import { Play } from 'lucide-react';

export const Media3: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// VIDEO PLATE WITH ANGULAR PLAY BUTTON</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            STRUCTURAL MONOGRAPH VIDEO
          </h2>
        </div>

        <div className="relative w-full h-[450px] bg-[#14161a] overflow-hidden group cursor-pointer flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
            alt="Video Preview"
            className="absolute inset-0 w-full h-full object-cover filter saturate-[0.8] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#14161a]/30" />

          {/* Angular play button */}
          <div className="relative z-10 w-20 h-20 bg-[#ffc72c] text-[#14161a] flex items-center justify-center transform skew-x-[-12deg] group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </div>

          <div className="absolute bottom-6 left-6 bg-[#14161a] text-[#f7f6f3] px-4 py-2 font-mono text-xs uppercase">
            DURATION: 04:20 // 4K TECTONIC DOCUMENTARY
          </div>
        </div>
      </div>
    </section>
  );
};

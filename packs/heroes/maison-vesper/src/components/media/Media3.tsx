import React from 'react';
import { Play } from 'lucide-react';

export const Media3: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.3em] text-[#a68a64] border-b border-[#a68a64]/20 pb-3">
          <span>FILM DOCUMENTAIRE — ATELIER</span>
          <span>DURATION: 04:32</span>
        </div>

        <div className="aspect-[16/9] bg-[#241d18] border border-[#a68a64]/30 relative overflow-hidden flex items-center justify-center group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" 
            alt="Film plate background"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-[#1a1512]/30 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full border border-[#faf7f2] flex items-center justify-center text-[#faf7f2] group-hover:bg-[#faf7f2] group-hover:text-[#1a1512] transition-colors">
              <Play size={24} className="fill-current ml-1" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#faf7f2] uppercase">
              Visionner le Film N° 03
            </span>
          </div>
          <div className="absolute bottom-4 left-4 bg-[#faf7f2] px-2 py-0.5 font-mono text-[9px] text-[#1a1512]">
            16:9 • 4K ULTRA HD
          </div>
        </div>
      </div>
    </section>
  );
};

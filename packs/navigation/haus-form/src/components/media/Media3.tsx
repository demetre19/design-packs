/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Play } from 'lucide-react';

export const Media3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">MEDIA 03 // VIDEO PLATE WITH GEOMETRIC PLAY TRIANGLE</span>
        </div>

        <div className="border border-[#0a0a0a] bg-[#0a0a0a] relative group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
          <div className="w-full h-85 md:h-[420px] grayscale overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80" 
              alt="Video Specimen" 
              className="w-full h-full object-cover filter grayscale contrast-150 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#ffffff] border-2 border-[#0a0a0a] flex items-center justify-center group-hover:bg-[#e30613] group-hover:border-[#e30613] transition-colors">
                <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-[#0a0a0a] group-hover:border-l-[#ffffff] ml-1"></div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#ffffff] border-t border-[#0a0a0a] flex justify-between items-center font-mono text-xs uppercase">
            <div><span className="text-[#e30613] font-bold mr-2">DOCUMENTARY 01.</span> THE SWISS GRID IN MOTION</div>
            <div>{isPlaying ? '[PLAYING]' : '[READY]'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

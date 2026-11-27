/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Media1 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">MEDIA 01 // FULL-WIDTH B/W PLATE WITH CAPTION STRIP</span>
        </div>

        <div className="border border-[#0a0a0a] bg-[#0a0a0a]">
          <div className="w-full h-80 md:h-[400px] grayscale overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
              alt="Swiss Architecture Media" 
              className="w-full h-full object-cover filter grayscale contrast-150"
            />
          </div>
          <div className="p-4 bg-[#ffffff] border-t border-[#0a0a0a] flex flex-col md:flex-row justify-between items-center font-mono text-xs uppercase">
            <div><span className="text-[#e30613] font-bold mr-2">PLATE 01.</span> ZÜRICH PAVILION ARCHIVE</div>
            <div className="text-[#0a0a0a]/60 mt-2 md:mt-0">LOC: 47.3769° N, 8.5417° E</div>
          </div>
        </div>
      </div>
    </section>
  );
};

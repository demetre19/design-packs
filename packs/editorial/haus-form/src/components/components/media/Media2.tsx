/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const Media2 = () => {
  const images = [
    { title: "PLATE 01 // TYPOGRAPHY", url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80" },
    { title: "PLATE 02 // PAVILION", url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
    { title: "PLATE 03 // STRUCTURE", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">MEDIA 02 // STRICT GRID PHOTO GALLERY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="border border-[#0a0a0a] bg-[#0a0a0a]">
              <div className="w-full h-56 grayscale overflow-hidden">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover filter grayscale contrast-150" />
              </div>
              <div className="p-3 bg-[#ffffff] border-t border-[#0a0a0a] font-mono text-[10px] uppercase">
                <span className="text-[#e30613] font-bold mr-2">0{idx + 1}.</span> {img.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

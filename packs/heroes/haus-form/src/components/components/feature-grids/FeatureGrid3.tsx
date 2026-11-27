/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export const FeatureGrid3 = () => {
  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a]">
        <div className="p-8 border-b border-[#0a0a0a] flex items-center space-x-2">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">FEATURE GRID 03 // ASYMMETRIC MEDIA-TEXT ROWS</span>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#0a0a0a]">
          <div className="md:col-span-5 p-8 border-b md:border-b-0 md:border-r border-[#0a0a0a] bg-[#0a0a0a] flex items-center justify-center">
            <div className="w-full h-40 bg-[#ffffff] grayscale overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Architecture Grid" 
                className="w-full h-full object-cover filter grayscale contrast-150"
              />
            </div>
          </div>
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-4">
            <span className="text-[10px] font-mono text-[#e30613] font-bold uppercase">01 // STRUCTURAL PLATE</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">PRECISION RASTER ALIGNMENT</h3>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
              Precise calculation of vertical grid rhythm ensures optimal readability across all viewports and output media.
            </p>
          </div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-4 border-b md:border-b-0 md:border-r border-[#0a0a0a]">
            <span className="text-[10px] font-mono text-[#e30613] font-bold uppercase">02 // TYPOGRAPHIC HIERARCHY</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">GROTESQUE TYPE SPECIMENS</h3>
            <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80">
              Uncompromising letterform geometry derived from the legendary Swiss typefoundries of the mid-20th century.
            </p>
          </div>
          <div className="md:col-span-5 p-8 bg-[#0a0a0a] flex items-center justify-center">
            <div className="w-full h-40 bg-[#ffffff] grayscale overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80" 
                alt="Typography Specimen" 
                className="w-full h-full object-cover filter grayscale contrast-150"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

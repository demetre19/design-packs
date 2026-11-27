import React from 'react';
import { Terminal } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] font-bold uppercase flex justify-between">
          <span>[MEDIA COMPARTMENT // PLATE 01]</span>
          <span>REF: MED-01</span>
        </div>

        <div className="p-6">
          <div className="w-full h-72 sm:h-96 bg-[#111] border border-[#111] relative overflow-hidden mb-4">
            <img src="https://picsum.photos/seed/kraftwerk_media1/1200/800" alt="Full width" className="w-full h-full object-cover grayscale contrast-125" />
            <div className="absolute top-4 left-4 bg-[#111] text-[#e8e8e6] text-[9px] px-2 py-1">STUTTGART WIND TUNNEL FACILITY // TEST RUN 044</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] border-t border-[#111] pt-4">
            <div>
              <span className="text-[#666] block text-[8px]">APERTURE</span>
              <span className="font-bold">F/2.8</span>
            </div>
            <div>
              <span className="text-[#666] block text-[8px]">SHUTTER SPEED</span>
              <span className="font-bold">1/4000S</span>
            </div>
            <div>
              <span className="text-[#666] block text-[8px]">ISO</span>
              <span className="font-bold">400</span>
            </div>
            <div>
              <span className="text-[#666] block text-[8px]">CLASSIFICATION</span>
              <span className="font-bold">UNRESTRICTED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

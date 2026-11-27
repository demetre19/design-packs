import React from 'react';
import { Terminal } from 'lucide-react';

export function Media2() {
  const plates = ['PLATE-01', 'PLATE-02', 'PLATE-03', 'PLATE-04'];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-6 text-[10px] font-bold uppercase">
          <span>[DOCUMENTATION PLATE GALLERY // 2X2]</span>
          <span>REF: MED-02</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plates.map((plate, i) => (
            <div key={i} className="border-2 border-[#111] bg-white p-4">
              <div className="flex justify-between items-center text-[9px] text-[#666] border-b border-[#111] pb-2 mb-3">
                <span className="font-bold">{plate}</span>
                <span>ARCHIVE STUTTGART</span>
              </div>
              <div className="h-60 bg-[#111] border border-[#111] relative overflow-hidden">
                <img src={`https://picsum.photos/seed/kraftwerk_gallery${i}/600/400`} alt="Gallery" className="w-full h-full object-cover grayscale contrast-125" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

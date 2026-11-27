import React from 'react';

export function Media2() {
  const plates = ['S-01', 'S-02', 'S-03', 'S-04'];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">MEDIA // 02</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            GALLERY GRID WITH <span className="text-[#ff3d00]">SORTIE NUMBERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plates.map((s) => (
            <div
              key={s}
              className="bg-[#20232a] border border-[#3a3e4c] p-4 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] space-y-4"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#ff3d00]">{s} // PLATE</span>
                <span className="text-zinc-400">M 3.4</span>
              </div>
              <div className="h-40 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden">
                <span className="text-xs font-bold text-zinc-400">FRAME CAPTURE</span>
              </div>
              <div className="text-[10px] text-zinc-400 uppercase">WIND TUNNEL STRESS CAPTURE</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

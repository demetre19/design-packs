import React from 'react';

export function Media1() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-2">VISUAL PLATE</span>
          <h2 className="font-serif text-3xl text-[#ece8e1]">Full-Width Graded Plate</h2>
        </div>

        <div className="w-full h-[450px] bg-[#13171c] border border-white/10 relative p-6 flex flex-col justify-end">
          <div className="absolute top-4 left-4 text-[10px] font-mono text-[#7a8494]">PLATE-01 // ATELIER GENEVA</div>
          <div className="absolute top-4 right-4 text-[10px] font-mono text-[#d4b06a]">N 46°12' E 6°09'</div>
          <div>
            <span className="text-xs font-mono text-[#d4b06a] block mb-1">HAUTE HORLOGERIE CAPTURE</span>
            <h3 className="font-serif text-2xl text-[#ece8e1]">The Grand Complication Assembly Bench</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

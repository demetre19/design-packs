import React from 'react';

export function BlogCard4() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">OVERLAPPING EDITORIAL CARD</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">BLOG 04</span>
        </div>
        <div className="relative border border-black overflow-hidden bg-neutral-200">
          <div className="aspect-[21/9] w-full">
            <img 
              src="https://picsum.photos/seed/blogbanner4/1200/500" 
              alt="Editorial Banner" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-[480px] bg-black text-white p-6 border border-white">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">CASE STUDY // 2026</div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3">ZURICH PAVILION CATALOGUE</h3>
            <p className="text-xs uppercase tracking-wider text-neutral-300 leading-relaxed mb-4">
              A comprehensive documentation of structural concrete forms through duotone photography and heavy matte stock binding.
            </p>
            <div className="text-[10px] font-bold uppercase tracking-widest border-t border-white/40 pt-2 flex justify-between">
              <span>CLIENT: ZURICH DESIGN FOUNDATION</span>
              <span>VIEW SPEC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

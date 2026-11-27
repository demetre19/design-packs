import React from 'react';

export function BlogCard4() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-[#3d2530] text-center space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="px-4 py-1.5 rounded-full bg-[#ff8c42] text-white font-black text-xs uppercase">Play Journal</span>
          <span className="px-4 py-1.5 rounded-full bg-[#5ba8e8] text-white font-black text-xs uppercase">5 Min Read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#3d2530] leading-tight">
          How to spark imaginative play in 10 minutes a day
        </h1>
        <div className="text-sm font-bold text-[#3d2530]/60">Written by Dr. Clara Vance • June 2026</div>
      </div>
    </section>
  );
}

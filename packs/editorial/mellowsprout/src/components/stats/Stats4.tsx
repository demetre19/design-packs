import React from 'react';

export function Stats4() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[36px] shadow-xl border-4 border-[#3d2530] relative text-center">
          <div className="absolute -top-4 -right-4 bg-[#ff8c42] text-white px-4 py-1 rounded-full font-black text-xs border-2 border-[#3d2530] rotate-6">
            Verified ⭐
          </div>
          <div className="text-6xl font-black text-[#ff8c42] mb-2">45k</div>
          <div className="font-bold text-[#3d2530]/70">Active Little Explorers</div>
        </div>
        <div className="bg-white p-8 rounded-[36px] shadow-xl border-4 border-[#3d2530] relative text-center">
          <div className="absolute -top-4 -right-4 bg-[#5ba8e8] text-white px-4 py-1 rounded-full font-black text-xs border-2 border-[#3d2530] -rotate-6">
            Global 🌍
          </div>
          <div className="text-6xl font-black text-[#5ba8e8] mb-2">1.2M</div>
          <div className="font-bold text-[#3d2530]/70">Delightful Boxes Shipped</div>
        </div>
      </div>
    </section>
  );
}

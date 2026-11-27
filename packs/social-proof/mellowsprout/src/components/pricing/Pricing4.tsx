import React from 'react';

export function Pricing4() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-[36px] shadow-2xl border-4 border-[#3d2530] space-y-6">
        <h2 className="text-3xl font-black text-[#3d2530] text-center mb-8">Compare Plan Features</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#5ba8e8]/10 font-bold">
            <span>Monthly Play Kits</span>
            <span className="text-[#5ba8e8]">Included in all plans</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#ff8c42]/10 font-bold">
            <span>Virtual Storytelling Hours</span>
            <span className="text-[#ff8c42]">Pro & Annual only</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f975a3]/10 font-bold">
            <span>Custom Wooden Toys</span>
            <span className="text-[#f975a3]">Master Creator only</span>
          </div>
        </div>
      </div>
    </section>
  );
}

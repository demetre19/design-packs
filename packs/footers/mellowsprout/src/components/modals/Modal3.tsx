import React from 'react';

export function Modal3() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-md ml-auto bg-white p-8 rounded-[40px] shadow-2xl border-4 border-[#3d2530] space-y-6">
        <h3 className="text-2xl font-black text-[#3d2530]">Kit Details</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[#5ba8e8]/10 font-bold">🎨 Painting supplies included</div>
          <div className="p-4 rounded-2xl bg-[#ff8c42]/10 font-bold">🧩 Wooden puzzle set</div>
        </div>
        <button className="w-full py-4 rounded-full bg-[#5ba8e8] text-white font-black">Close Panel</button>
      </div>
    </section>
  );
}

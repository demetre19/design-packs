import React from 'react';

export function Cta2() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-[#3d2530] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-[#3d2530]">Give the gift of play this season</h2>
          <p className="text-[#3d2530]/80 font-medium">Surprise your grandchildren, nieces, or nephews with a 3, 6, or 12-month carnival gift pass.</p>
          <button className="px-8 py-4 rounded-full bg-[#5ba8e8] text-white font-black shadow-lg">Buy Gift Pass 🎁</button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#f975a3]/20 rounded-3xl transform rotate-3"></div>
          <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80" alt="Gift box" className="relative rounded-2xl shadow-xl w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Cta3() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#f975a3]/20 text-[#f975a3] font-black text-sm uppercase">🎈 minimal cta</span>
        <h2 className="text-4xl font-black text-[#3d2530]">Start your free trial today</h2>
        <button className="px-9 py-4 rounded-full bg-[#ff8c42] text-white font-black text-lg shadow-xl hover:bg-[#e07733]">
          Start Free Trial ✨
        </button>
      </div>
    </section>
  );
}

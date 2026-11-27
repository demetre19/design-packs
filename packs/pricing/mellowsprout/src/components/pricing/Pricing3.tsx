import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-dashed border-[#ff8c42] text-center space-y-8 relative">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#5ba8e8] text-white px-6 py-1.5 rounded-full font-black text-sm border-2 border-[#3d2530] shadow-md">
          ✨ Special Founder Box ✨
        </div>
        <h2 className="text-4xl font-black text-[#3d2530]">The Ultimate Discovery Box</h2>
        <div className="text-6xl font-black text-[#ff8c42]">$49 <span className="text-lg text-[#3d2530]/60 font-bold">/ one-time</span></div>
        <p className="text-[#3d2530]/80 font-medium">
          A massive deluxe box packed with 6 full craft projects, storytelling books, and custom wooden toys.
        </p>
        <button className="w-full py-4 rounded-full bg-[#ff8c42] text-white font-black text-lg shadow-xl hover:bg-[#e07733] transition-all">
          Claim Founder Box 🚀
        </button>
      </div>
    </section>
  );
}

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

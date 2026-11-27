import React from 'react';
import { AlertCircle } from 'lucide-react';

export function Modal2() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6 flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-8 rounded-[40px] shadow-2xl border-4 border-[#3d2530] text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#ff8c42]/20 text-[#ff8c42] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-[#3d2530]">Are you ready to join?</h3>
        <p className="text-[#3d2530]/80 font-medium">Your subscription will start immediately with free shipping.</p>
        <div className="flex gap-4">
          <button className="flex-1 py-3.5 rounded-full bg-[#fdf3e7] text-[#3d2530] font-black border-2 border-[#3d2530]/20">Cancel</button>
          <button className="flex-1 py-3.5 rounded-full bg-[#ff8c42] text-white font-black shadow-lg">Confirm ✨</button>
        </div>
      </div>
    </section>
  );
}

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

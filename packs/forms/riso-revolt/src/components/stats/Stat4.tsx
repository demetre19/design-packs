import React from 'react';

export default function Stat4() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto bg-white border-3 border-[#111111] shadow-hard-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#111111] pb-6 md:pb-0 md:pr-6">
          <div className="font-grotesk font-black text-6xl text-[#ff6b5e] mb-2">01</div>
          <div className="font-mono text-xs font-bold uppercase">BERLIN PRINT LAB</div>
        </div>
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#111111] pb-6 md:pb-0 md:pr-6">
          <div className="font-grotesk font-black text-6xl text-[#ffd92e] mb-2">02</div>
          <div className="font-mono text-xs font-bold uppercase">TOKYO DESIGN FORGE</div>
        </div>
        <div>
          <div className="font-grotesk font-black text-6xl text-[#111111] mb-2">03</div>
          <div className="font-mono text-xs font-bold uppercase">GLOBAL DIGITAL SPRINT</div>
        </div>
      </div>
    </section>
  );
}

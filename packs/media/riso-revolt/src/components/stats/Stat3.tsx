import React from 'react';

export default function Stat3() {
  return (
    <section className="w-full bg-[#111111] text-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <div className="font-grotesk font-black text-5xl text-[#ffd92e] mb-2">1,420</div>
          <div className="font-mono text-xs text-[#fffdf5]/70 uppercase">RISO EDITIONS</div>
        </div>
        <div>
          <div className="font-grotesk font-black text-5xl text-[#ff6b5e] mb-2">99.9%</div>
          <div className="font-mono text-xs text-[#fffdf5]/70 uppercase">UPTIME GUARANTEE</div>
        </div>
        <div>
          <div className="font-grotesk font-black text-5xl text-[#ffd92e] mb-2">52.5°N</div>
          <div className="font-mono text-xs text-[#fffdf5]/70 uppercase">BERLIN COORDINATES</div>
        </div>
        <div>
          <div className="font-grotesk font-black text-5xl text-[#ff6b5e] mb-2">4</div>
          <div className="font-mono text-xs text-[#fffdf5]/70 uppercase">SLOTS PER MONTH</div>
        </div>
      </div>
    </section>
  );
}

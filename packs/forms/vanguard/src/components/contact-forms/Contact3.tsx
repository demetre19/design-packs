import React from 'react';

export function Contact3() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">CONTACT // 03</span>
          <h2 className="text-3xl font-black tracking-tighter uppercase font-sans">
            NEWSLETTER <span className="text-[#ff3d00]">STRIP</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-base font-extrabold uppercase font-sans">SUBSCRIBE TO SORTIE DISPATCHES</h3>
            <p className="text-xs text-zinc-300">Receive encrypted flight test schedules and supersonic CFD reports.</p>
          </div>
          <div className="flex w-full md:w-auto space-x-2">
            <input
              type="email"
              placeholder="operator@vanguard.mil"
              className="bg-[#16181d] border border-[#3a3e4c] px-4 py-3 text-xs text-white focus:border-[#ff3d00] outline-none w-full md:w-64"
            />
            <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-6 py-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] shrink-0">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

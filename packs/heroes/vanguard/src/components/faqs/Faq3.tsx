import React from 'react';

export function Faq3() {
  const faqs = [
    { num: '01', q: 'WHAT IS THE SCRAMJET ISP RATING?', a: 'Sustained specific impulse of 1,420 seconds under Mach 4+ atmospheric conditions.' },
    { num: '02', q: 'ARE CHASE PLANES REQUIRED?', a: 'Mandatory for all sorties exceeding Mach 3.0 within the Nevada Test Range.' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FAQ // 03</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            NUMBERED FAQ WITH <span className="text-[#ff3d00]">INDICES</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f) => (
            <div
              key={f.num}
              className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] flex items-start space-x-6"
            >
              <span className="text-2xl font-black text-[#ff3d00] font-sans">{f.num}</span>
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold uppercase font-sans">{f.q}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

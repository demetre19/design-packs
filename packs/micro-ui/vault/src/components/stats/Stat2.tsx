import React from 'react';

export function Stat2() {
  const cells = [
    { num: "500+", label: "Subscribers", dark: true },
    { num: "09", label: "Volumes Released", dark: false },
    { num: "140g", label: "Munken Paper", dark: true },
    { num: "3", label: "Global Studios", dark: false }
  ];

  return (
    <section className="w-full border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {cells.map((c, i) => (
          <div key={i} className={`p-12 border-r border-black flex flex-col justify-between ${c.dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <span className="text-[9px] uppercase tracking-widest font-mono opacity-70 block mb-6">STAT 0{i+1}</span>
            <div>
              <span className="text-5xl md:text-6xl font-black font-serif-editorial block mb-2">{c.num}</span>
              <span className="text-xs font-mono uppercase tracking-widest block font-bold">{c.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';

export function Stat2() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-y border-black/10 py-12">
        <div className="space-y-1">
          <span className="font-light text-5xl tracking-tighter">03</span>
          <span className="text-[10px] uppercase tracking-wider text-black/50 block">private clients per quarter</span>
        </div>
        <div className="space-y-1">
          <span className="font-light text-5xl tracking-tighter">14d</span>
          <span className="text-[10px] uppercase tracking-wider text-black/50 block">average typography turnaround</span>
        </div>
        <div className="space-y-1">
          <span className="font-light text-5xl tracking-tighter">0.0</span>
          <span className="text-[10px] uppercase tracking-wider text-black/50 block">superfluous interface elements</span>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export function Hero3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-10">index 03 / manifesto</div>
      <div className="space-y-4 mb-16">
        <h1 className="font-light text-5xl md:text-8xl tracking-tighter lowercase leading-none">
          essential form
        </h1>
        <h1 className="font-light text-5xl md:text-8xl tracking-tighter lowercase leading-none pl-12 md:pl-32 text-black/60">
          unburdened noise.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-black/10 text-xs font-light text-black/70">
        <div>
          <span className="text-black block mb-1">01. typography</span>
          <p>grotesque type scales designed for quiet legibility and profound stillness.</p>
        </div>
        <div>
          <span className="text-black block mb-1">02. space</span>
          <p>enormous margins and intentional voids that let content breathe naturally.</p>
        </div>
        <div>
          <span className="text-black block mb-1">03. execution</span>
          <p>uncompromising build quality with zero superficial embellishment.</p>
        </div>
      </div>
    </section>
  );
}

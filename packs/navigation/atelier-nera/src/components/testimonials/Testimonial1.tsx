import React from 'react';

export function Testimonial1() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28 border-t border-black/10">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">client testimonials / 01</div>
      <blockquote className="max-w-4xl">
        <p className="font-light text-3xl md:text-5xl tracking-tighter lowercase leading-[1.15] mb-8">
          &ldquo;Atelier Nera brought an exquisite sense of stillness and architectural clarity to our digital presence.&rdquo;
        </p>
        <footer className="flex items-center gap-4 text-xs font-light">
          <div className="w-8 h-8 rounded-none bg-neutral-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Client" className="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <span className="text-black block lowercase">helena vance</span>
            <span className="text-black/50 text-[10px] uppercase tracking-wider">director, galerie blanc milano</span>
          </div>
        </footer>
      </blockquote>
    </section>
  );
}

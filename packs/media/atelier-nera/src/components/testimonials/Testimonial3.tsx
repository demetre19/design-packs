import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Testimonial3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28 text-center border-t border-black/10">
      <div className="flex justify-center mb-8 text-black/40">
        <ArrowDown className="w-4 h-4 stroke-[1]" />
      </div>
      <blockquote className="max-w-2xl mx-auto space-y-6">
        <p className="font-light text-2xl md:text-3xl tracking-tight lowercase leading-relaxed">
          &ldquo;In a digital landscape choked by noise, Atelier Nera provides a sanctuary of typographic peace.&rdquo;
        </p>
        <footer className="text-xs font-light text-black/60 lowercase">
          — marcella moretti, curator &amp; critic
        </footer>
      </blockquote>
    </section>
  );
}

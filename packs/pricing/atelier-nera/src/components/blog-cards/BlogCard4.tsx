import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="border border-black/10 p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <span className="text-[9px] tracking-widest uppercase text-black/50">featured monograph essay</span>
          <h3 className="font-light text-3xl md:text-5xl tracking-tighter lowercase leading-tight">
            the preservation of void in contemporary interface design.
          </h3>
          <p className="font-light text-xs text-black/70 leading-relaxed">
            An examination of how intentional emptiness fosters cognitive serenity and elevates digital artifacts into timeless collections.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-flex items-center gap-2 text-xs font-light lowercase border-b border-black pb-1">
              read full essay <ArrowRight className="w-3 h-3 stroke-[1.5]" />
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="w-full h-72 bg-neutral-100 p-2 border border-black/10">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80" alt="Essay" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}

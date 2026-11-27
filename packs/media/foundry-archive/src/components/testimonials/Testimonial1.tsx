import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. HISTORIAN QUOTES IN ESSAY COLUMNS</h2>
          <span className="text-xs text-neutral-500">SCHOLARLY REVIEW</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-neutral-950 border border-neutral-800 p-8 text-xs text-neutral-400 font-sans">
          <div className="border-r border-neutral-800 pr-6">
            <Quote className="w-5 h-5 text-neutral-600 mb-4" />
            <p className="leading-relaxed mb-4">
              "The digital revival of Bodoni Époque captures the exact tension between hairline delicacy and heavy vertical stem loading that defined 18th-century royal printing."
            </p>
            <div className="font-mono text-neutral-500 text-[10px] uppercase">
              — Dr. Alistair Finch <br />
              <span className="text-neutral-600">Society of Typographic Historians, 1989</span>
            </div>
          </div>
          <div className="border-r border-neutral-800 pr-6 pl-2">
            <Quote className="w-5 h-5 text-neutral-600 mb-4" />
            <p className="leading-relaxed mb-4">
              "Without these rigorous optical master cuts, our understanding of Swiss rationalist typography would remain incomplete. An archival masterpiece."
            </p>
            <div className="font-mono text-neutral-500 text-[10px] uppercase">
              — Prof. Hélène Vane <br />
              <span className="text-neutral-600">Basel Academy of Design</span>
            </div>
          </div>
          <div className="pl-2">
            <Quote className="w-5 h-5 text-neutral-600 mb-4" />
            <p className="leading-relaxed mb-4">
              "The meticulous preservation of lead punch imperfections gives this typeface a palpable historical gravity missing in modern digital type."
            </p>
            <div className="font-mono text-neutral-500 text-[10px] uppercase">
              — Marcus Thorne <br />
              <span className="text-neutral-600">Curator, Cabinet 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial2() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Testimonial 02 // Greyscale Quote Wall</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Global Studio Acclaim</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">SHADES OF GREY SCALE</span>
        </div>

        <div className="space-y-6">
          <div className="border border-neutral-800 bg-neutral-950 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-lg font-light text-white max-w-3xl">
              "Gravitas redefines how we approach responsive editorial grids across high-density devices."
            </p>
            <span className="mt-2 sm:mt-0 text-xs font-mono text-neutral-400">STUDIO NORD // COPENHAGEN</span>
          </div>
          <div className="border border-neutral-800 bg-neutral-950 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-lg font-normal text-neutral-200 max-w-3xl">
              "The meticulous kerning tables save our frontend engineering team hours of manual adjustment."
            </p>
            <span className="mt-2 sm:mt-0 text-xs font-mono text-neutral-400">ATELIER ZURICH // SWITZERLAND</span>
          </div>
          <div className="border border-neutral-800 bg-neutral-950 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-lg font-bold text-neutral-400 max-w-3xl">
              "Uncompromising geometric precision with an unmistakable European modernist heritage."
            </p>
            <span className="mt-2 sm:mt-0 text-xs font-mono text-neutral-400">TOKYO TYPE REVUE // JAPAN</span>
          </div>
        </div>
      </div>
    </section>
  );
}

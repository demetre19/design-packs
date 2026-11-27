import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function Cta1() {
  return (
    <section className="w-full bg-[#ff8c42] py-20 px-6 text-white text-center shadow-xl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#ff8c42] font-black text-sm uppercase">
          ✨ join the adventure
        </div>
        <h2 className="text-5xl md:text-7xl font-black leading-tight text-[#fdf3e7]">
          Ready to spark joy in your home?
        </h2>
        <p className="text-xl font-medium max-w-xl mx-auto opacity-90">
          Subscribe today and receive your first sensory play kit with free shipping and bonus storytelling book.
        </p>
        <button className="px-10 py-5 rounded-full bg-white text-[#ff8c42] font-black text-xl shadow-2xl hover:bg-[#fdf3e7] transition-all transform hover:scale-105 inline-flex items-center gap-3">
          Get Started Now <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

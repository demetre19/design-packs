import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonial1() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto relative">
        {/* Rotated badge */}
        <div className="absolute -top-6 -left-6 bg-[#ff6b5e] text-white border-2 border-[#111111] px-4 py-2 font-mono text-xs font-black shadow-hard-sm rotate-[-6deg] z-10">
          ★ VERIFIED CLIENT REVIEW
        </div>

        <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-8 sm:p-12 relative">
          <div className="flex items-center gap-1 text-[#ffd92e] mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#111111" className="text-[#111111]" />
            ))}
          </div>

          <blockquote className="font-grotesk font-black text-2xl sm:text-4xl uppercase leading-tight mb-8">
            "Riso & Revolt transformed our digital product from a boring SaaS clone into an explosive tactile masterpiece. Our engagement skyrocketed by 340% in week one."
          </blockquote>

          <div className="flex items-center gap-4 pt-6 border-t-2 border-[#111111]">
            <div className="w-12 h-12 bg-[#ffd92e] border-2 border-[#111111] shadow-hard-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-grotesk font-black text-lg">ELENA VANCE</div>
              <div className="font-mono text-xs text-[#111111]/70">// CTO, MONOLITH LABS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Calendar, Clock, Share2, Bookmark } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="w-full bg-[#e8f0ec] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[#faf6f0] rounded-[32px] p-8 md:p-14 shadow-sm">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#e8f0ec] text-[#2a7a6d] text-xs font-semibold uppercase tracking-widest mb-6">
          Clinical Strategy & Brand Design
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-[#122420] tracking-tight leading-[1.15] mb-8">
          The Architecture of Trust: How Warm Spatial Design Heals Before Consultation Begins.
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-[#122420]/15 text-sm text-[#122420]">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Dr. Elena Vance"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-serif text-base text-[#122420]">Dr. Elena Vance</p>
              <p className="text-xs text-[#2a7a6d] uppercase tracking-wider font-semibold">Chief Clinical Strategist</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-[#122420]/70">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#2a7a6d]" />
              <span>Nov 20, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2a7a6d]" />
              <span>6 min read</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button className="p-2.5 rounded-full bg-[#e8f0ec] text-[#122420] hover:bg-[#1d4f47] hover:text-[#faf6f0] transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-full bg-[#e8f0ec] text-[#122420] hover:bg-[#1d4f47] hover:text-[#faf6f0] transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

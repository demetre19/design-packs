import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonial1: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-4xl mx-auto px-6 space-y-8 relative">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#ffc72c] transform skew-x-[-12deg] flex items-center justify-center text-[#14161a] opacity-30">
          <Quote className="w-10 h-10" />
        </div>

        <div className="space-y-4 relative z-10">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// CLIENT MONOGRAPH // 01</span>
          <blockquote className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight leading-snug">
            &ldquo;KANTILEVER TRANSFORMED OUR STEEP ALPINE PLOT INTO A MASTERPIECE OF SUSPENDED CONCRETE AND LIGHT. THE STRUCTURAL AUDACITY IS BREATHLESS.&rdquo;
          </blockquote>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-[#14161a]/15">
          <div className="w-12 h-12 bg-[#14161a] text-[#ffc72c] flex items-center justify-center font-mono font-bold transform skew-x-[-12deg]">
            HB
          </div>
          <div>
            <div className="font-extrabold uppercase text-sm">DR. HEINRICH BAUER</div>
            <div className="font-mono text-xs text-[#14161a]/60">FOUNDER // ZURICH VENTURE HOLDINGS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

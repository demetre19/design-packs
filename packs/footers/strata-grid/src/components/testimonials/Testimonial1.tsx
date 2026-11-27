import React from 'react';

export function Testimonial1() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-4xl mx-auto bg-white border border-[#0d0e10]/15 p-10 md:p-14 flex flex-col gap-8 rounded-[2px] relative">
        <div className="flex justify-between items-center pb-6 border-b border-[#0d0e10]/10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">OPERATOR TESTIMONIAL // T-01</span>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/40">[01]</span>
        </div>
        <blockquote className="text-xl md:text-2xl font-medium tracking-tight uppercase leading-relaxed text-[#0d0e10]">
          "Strata Grid reduced our regional substation fault isolation time from 14 minutes to 120 microseconds. It is the absolute standard for autonomous power infrastructure."
        </blockquote>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-6 border-t border-[#0d0e10]/10 font-mono text-xs">
          <div>
            <div className="font-semibold uppercase text-sm">Elena Vance</div>
            <div className="text-[#0d0e10]/60 text-[10px] uppercase tracking-wider mt-0.5">Chief Infrastructure Engineer, Nordik Power Mesh</div>
          </div>
          <span className="text-[#2743f0] font-bold">1,420 NODES MANAGED</span>
        </div>
      </div>
    </section>
  );
}

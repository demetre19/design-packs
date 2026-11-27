import React from 'react';

export function Testimonial2() {
  const testimonials = [
    {
      quote: "Strata Grid's telemetry engine provides deterministic visibility that legacy SCADA systems simply cannot match.",
      author: "Marcus Thorne",
      role: "Director of Grid Operations, Apex Energy",
      index: "01"
    },
    {
      quote: "Post-quantum mesh security gives our national infrastructure absolute immunity against distributed cyber interference.",
      author: "Dr. Aris Thorne",
      role: "Head of Infrastructure Security, Helios Power",
      index: "02"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">OPERATOR VERIFICATION MATRIX</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Trusted by critical power networks.</h2>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[TST-02 // REGISTER]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#f2f3f5] p-8 border border-[#0d0e10]/15 flex flex-col justify-between gap-8 rounded-[2px]">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase text-[#2743f0] font-bold">VERIFIED OPERATOR [{t.index}]</span>
                <span className="font-mono text-[10px] text-[#0d0e10]/45">ISO-27001</span>
              </div>
              <blockquote className="text-base font-medium tracking-tight uppercase leading-relaxed text-[#0d0e10]">
                "{t.quote}"
              </blockquote>
              <div className="pt-6 border-t border-[#0d0e10]/10 font-mono text-xs flex justify-between items-end">
                <div>
                  <div className="font-semibold uppercase text-sm font-sans">{t.author}</div>
                  <div className="text-[#0d0e10]/60 text-[10px] uppercase tracking-wider mt-0.5">{t.role}</div>
                </div>
                <span className="text-[#2743f0] font-bold">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

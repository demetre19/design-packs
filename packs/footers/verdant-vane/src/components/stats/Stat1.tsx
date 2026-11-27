import React from 'react';

export function Stat1() {
  const stats = [
    { value: "140+", label: "Clinics Transformed", desc: "Across Europe and North America" },
    { value: "98%", label: "Client Retention", desc: "Long-term strategic partnership" },
    { value: "12", label: "Global Design Awards", desc: "Recognised for warm editorial luxury" },
    { value: "15+", label: "Years Experience", desc: "In clinical & brand architecture" }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Impact & Metrics
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Measured by the depth of our care.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#122420]/10">
          {stats.map((s, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'md:pl-8' : ''}`}>
              <span className="font-serif text-5xl md:text-6xl text-[#122420] font-bold mb-2">{s.value}</span>
              <span className="text-sm font-semibold text-[#1d4f47] uppercase tracking-wider mb-1">{s.label}</span>
              <span className="text-xs text-[#122420]/70 font-light">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

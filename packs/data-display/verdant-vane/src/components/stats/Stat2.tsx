import React from 'react';

export function Stat2() {
  const stats = [
    { value: "140+", label: "Clinics Transformed" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "42%", label: "Avg. Patient Satisfaction Lift" },
    { value: "15 Yrs", label: "Clinical Expertise" }
  ];

  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Verified Outcomes
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Proven results for visionary practices.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#faf6f0] rounded-[24px] p-8 shadow-sm text-center">
              <span className="font-serif text-4xl md:text-5xl text-[#122420] font-bold block mb-2">{s.value}</span>
              <span className="text-xs uppercase tracking-wider text-[#2a7a6d] font-semibold">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

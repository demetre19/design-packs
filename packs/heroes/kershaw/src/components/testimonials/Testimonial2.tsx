import React from 'react';

export function Testimonial2() {
  const quotes = [
    { text: 'The vibration isolation on Cell 04 allowed us to detect micro-variations in our titanium valve train at 9,200 RPM.', author: 'DR. ELENA ROUX', role: 'HEAD OF METALLURGY, VORTEX RACING' },
    { text: 'Uncompromised telemetry streams and instant torque verification. Kershaw is the absolute gold standard for dyno testing.', author: 'STEFAN KRAUSE', role: 'TECHNICAL DIRECTOR, GT ENDURANCE' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {quotes.map((q, i) => (
          <div key={i} className="bg-[#14161a] border border-[#262c36] p-8 flex flex-col justify-between hover:border-[#ffd500] transition-colors">
            <p className="text-zinc-300 font-sans text-sm leading-relaxed mb-8">“{q.text}”</p>
            <div className="pt-6 border-t border-[#22262f]">
              <span className="text-white font-bold text-xs uppercase block">{q.author}</span>
              <span className="text-[10px] text-[#ffd500] font-mono mt-1 block">{q.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

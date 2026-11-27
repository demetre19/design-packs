import React from 'react';

export const FAQ2: React.FC = () => {
  const faqs = [
    { q: 'SITE TOPOGRAPHY ANALYSIS', a: 'We evaluate slope stability, geological bearing capacities, and microclimatic shear winds prior to massing.' },
    { q: 'ZONING & PERMITTING COMPLIANCE', a: 'All blueprints are engineered to comply with stringent European and Asian municipal building codes.' },
    { q: 'SUSTAINABILITY CERTIFICATIONS', a: 'Our designs consistently achieve LEED Platinum and Minergie-P energy efficiency ratings.' },
    { q: 'ON-SITE SUPERVISION', a: 'Dedicated principal architects oversee structural pouring and steel erection phases directly.' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// TWO-COLUMN FAQ MATRIX</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            PRACTICE PROTOCOLS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#14161a] text-[#f7f6f3] p-8 space-y-4" style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)' }}>
              <span className="font-mono text-xs text-[#ffc72c] uppercase">// PROTOCOL 0{i + 1}</span>
              <h3 className="text-xl font-extrabold uppercase">{f.q}</h3>
              <p className="text-xs text-[#f7f6f3]/70 font-sans leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

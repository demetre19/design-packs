import React from 'react';

export function FeatureGrid1() {
  const experiences = [
    { num: '1', dates: '2018–PRES', role: 'Founder & Principal', org: 'Studio Sterling, London / Zurich', desc: 'Directing spatial identity, exhibition curation, and editorial book design for international cultural institutions.' },
    { num: '2', dates: '2014–2018', role: 'Senior Associate', org: 'Pentagram Design, London', desc: 'Led brand identity systems and wayfinding signage programs for major European museums and publishers.' },
    { num: '3', dates: '2012–2014', role: 'Typographic Designer', org: 'Atlas Studio, Amsterdam', desc: 'Created bespoke headline typefaces and editorial layouts for architectural monographs.' },
    { num: '4', dates: '2010–2012', role: 'Junior Designer', org: 'OMMA Graphics, Berlin', desc: 'Assisted in catalogue design, poster series, and digital archiving for modern art exhibitions.' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">EXPERIENCE // TIMELINE</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">GRID 01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border border-black p-4 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 border border-black rounded-full text-xs font-bold">{exp.num}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">{exp.dates}</span>
                </div>
                <h3 className="font-bold text-xs uppercase tracking-tight mb-1">{exp.role}</h3>
                <div className="text-[10px] text-neutral-600 uppercase tracking-widest mb-3 pb-2 border-b border-black">{exp.org}</div>
                <p className="text-[11px] leading-tight uppercase tracking-wider text-neutral-800">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

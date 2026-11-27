import React from 'react';

export function FeatureGrid2() {
  const education = [
    { dates: '2012–2014', degree: 'Master of Arts in Typography', institution: 'Royal College of Art, London', focus: 'Thesis on modernist grid systems and digital grid fluidity.' },
    { dates: '2008–2012', degree: 'Bachelor of Fine Arts in Graphic Design', institution: 'ETH Zurich, Switzerland', focus: 'Focus on Swiss Style, photography, and exhibition architecture.' },
    { dates: '2015–PRES', degree: 'Guest Lecturer & Critic', institution: 'Architectural Association School of Architecture', focus: 'Conducting graduate workshops in spatial editorial design.' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">EDUCATION & ACADEMIC ROLES</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">GRID 02</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="border border-black p-5 flex flex-col justify-between bg-neutral-50">
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase mb-2">{edu.dates}</div>
                <h3 className="font-bold text-sm uppercase tracking-tight mb-2">{edu.degree}</h3>
                <div className="text-xs font-black uppercase tracking-wider mb-4 pb-2 border-b border-black">{edu.institution}</div>
              </div>
              <p className="text-[11px] leading-tight uppercase tracking-wider text-neutral-700">{edu.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

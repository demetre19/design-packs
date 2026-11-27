import React from 'react';

export function FeatureGrid3() {
  const skills = [
    { name: 'Spatial Typography & Layout', level: '98%' },
    { name: 'Exhibition Curation & Wayfinding', level: '95%' },
    { name: 'Editorial Book Design & Binding', level: '92%' },
    { name: 'Bespoke Typeface Development', level: '88%' },
    { name: 'Creative Direction & Strategy', level: '96%' },
    { name: 'Archival Print Production', level: '90%' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">PROFESSIONAL CAPABILITIES & SKILLS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">GRID 03</span>
        </div>
        <div className="border border-black divide-y divide-black">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-neutral-100 transition-colors">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold w-6">0{idx + 1}</span>
                <span className="font-bold text-xs uppercase tracking-tight">{skill.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 md:w-64 h-2 border border-black bg-neutral-200 hidden sm:block">
                  <div className="h-full bg-black" style={{ width: skill.level }}></div>
                </div>
                <span className="font-black text-xs uppercase tracking-widest w-12 text-right">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

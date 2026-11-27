import React from 'react';

interface CascadeBeat {
  measure: string;
  title: string;
  spec: string;
  body: string;
  alignClass: string;
  accent?: boolean;
}

export const Content14: React.FC = () => {
  const beats: CascadeBeat[] = [
    {
      measure: 'BEAT 01 // WIDE-LEFT [72%]',
      title: 'TOPOLOGY DETERMINES THE ANGLE OF ENTRY',
      spec: '12.5° INITIAL VECTOR · 0.00 m DATUM',
      body: 'Every KANTILEVER commission begins with a high-resolution lidar sweep of the bedrock slope. Rather than blasting a flat terrace, our structural envelope adopts the dominant geological fault angle.',
      alignClass: 'lg:w-[72%] lg:mr-auto',
    },
    {
      measure: 'BEAT 02 // NARROW-RIGHT [38%]',
      title: 'ZERO-PIER PERIMETER',
      spec: '18.0 m CLEAR OVERHANG',
      body: 'Eliminating corner columns clears 270° panoramic sightlines across alpine valleys and urban rail corridors.',
      alignClass: 'lg:w-[38%] lg:ml-auto',
      accent: true,
    },
    {
      measure: 'BEAT 03 // MEDIUM-CENTER [54%]',
      title: 'POST-TENSIONED EQUILIBRIUM',
      spec: '690 MPa TENSION CORDS',
      body: 'Internal steel strands run diagonally from the counterweight core to the outer slab tip, locking deflection well below perceivable thresholds.',
      alignClass: 'lg:w-[54%] lg:mx-auto',
    },
    {
      measure: 'BEAT 04 // WIDE-RIGHT [68%]',
      title: 'SOLAR LOUVERS TUNED TO SEASONAL AZIMUTH',
      spec: '14° PRECAST FINS · -38% THERMAL GAIN',
      body: 'Precast concrete and anodized aluminum fins reject high summer glare while admitting low winter radiation deep into the interior thermal mass floor.',
      alignClass: 'lg:w-[68%] lg:ml-auto',
    },
    {
      measure: 'BEAT 05 // NARROW-LEFT [42%]',
      title: 'ENDURING MATERIAL HONESTY',
      spec: '100-YEAR SERVICE RATING',
      body: 'Raw board-formed concrete and brushed structural steel weather naturally without synthetic cladding.',
      alignClass: 'lg:w-[42%] lg:mr-auto',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Musical-Score Vertical Measure Hairlines behind the cascade */}
        <div
          aria-hidden="true"
          className="hidden lg:grid grid-cols-12 absolute inset-y-0 inset-x-6 pointer-events-none"
        >
          {Array.from({ length: 12 }, (_, idx) => (
            <div key={idx} className="border-r border-[#14161a]/[0.07] h-full" />
          ))}
        </div>

        <div className="relative z-10 mb-14 border-b-2 border-[#14161a] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
              SCORE 14 // MATHEMATICAL HORIZONTAL RHYTHM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mt-1">
              SPATIAL CADENCE CASCADE
            </h2>
          </div>
          <span className="font-mono text-xs text-[#14161a]/70">
            5 MEASURES · SHIFTING PROPORTIONAL WIDTHS
          </span>
        </div>

        {/* Descending Cascading Blocks */}
        <div className="space-y-8 relative z-10">
          {beats.map((beat) => (
            <div
              key={beat.measure}
              className={`${beat.alignClass} p-6 md:p-8 border border-[#14161a] ${
                beat.accent ? 'bg-[#ffc72c] text-[#14161a]' : 'bg-[#f7f6f3] text-[#14161a]'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] mb-3 border-b border-[#14161a]/20 pb-2">
                <span className="font-bold">{beat.measure}</span>
                <span className={beat.accent ? 'bg-[#14161a] text-[#ffc72c] px-2 py-0.5' : 'text-[#14161a]/65'}>
                  {beat.spec}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">
                {beat.title}
              </h3>
              <p className="text-xs text-[#14161a]/80 font-sans leading-relaxed mt-2">
                {beat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

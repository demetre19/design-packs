import React from 'react';

export function Content13() {
  const columns = [
    {
      heading: '01 / PRACTICE & DIRECTION',
      pairs: [
        ['Principal Architect', 'Marcus Varden, SIA'],
        ['Partner, Tokyo', 'Kenji Sato, JIA'],
        ['Partner, Stockholm', 'Astrid Lindqvist, SAR'],
        ['Project Associate', 'Lukas Meyer'],
        ['Archival Editor', 'Clara von Berg'],
      ],
    },
    {
      heading: '02 / ENGINEERING & CONSULTANTS',
      pairs: [
        ['Structural Concrete', 'Ingenieurbüro Keller AG'],
        ['Timber Statics', 'Holzbau Graubünden'],
        ['Geotechnical Survey', 'AlpinGeo Zürich'],
        ['Building Physics', 'Studio Klima Basel'],
        ['Acoustic Calibration', 'Norda Akustik AB'],
      ],
    },
    {
      heading: '03 / CRAFTS & FABRICATION',
      pairs: [
        ['Board-Formed Pour', 'Bauunternehmung Caminada'],
        ['Sugi Carbonization', 'Yoshino Millworks Nara'],
        ['Bronze Hardware', 'Gieserei Kunst Bern'],
        ['Structural Glazing', 'VetroTec Liechtenstein'],
        ['Dry Stone Masonry', 'Cava Engadina'],
      ],
    },
    {
      heading: '04 / MONOGRAPH PRODUCTION',
      pairs: [
        ['Photography', 'Atelier Varden Archive'],
        ['Typesetting', 'IBM Plex Mono / Grotesque'],
        ['Paper Stock', 'Munken Polar Rough 120 g'],
        ['Binding', 'Thread-Sewn Open Spine'],
        ['Edition / ISBN', '4th · 978-3-907412-44-0'],
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f0efeb] py-16 lg:py-20 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#16171a] pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#16171a]">
              COLOPHON — BACK MATTER &amp; COLLABORATOR REGISTER
            </span>
          </div>
          <span className="text-[10px] font-mono text-stone-500 uppercase tabular-nums">
            PRINTED IN ZÜRICH · AUTUMN 2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.heading} className="space-y-4 border-t border-[#e2e0d8] pt-4 lg:border-t-0 lg:pt-0">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#b5482e]">
                {col.heading}
              </h3>
              <dl className="divide-y divide-[#e2e0d8] border-t border-b border-[#e2e0d8]">
                {col.pairs.map(([role, entity]) => (
                  <div key={role} className="py-2.5 space-y-0.5">
                    <dt className="text-[10px] font-mono uppercase text-stone-500">{role}</dt>
                    <dd className="text-xs font-medium text-[#16171a]">{entity}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#16171a] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-mono text-stone-600 uppercase tracking-wider">
          <p className="max-w-2xl leading-relaxed">
            ALL ARCHITECTURAL DRAWINGS, TECTONIC SECTIONS, AND PHOTOGRAPHIC PLATES ARE ARCHIVED AT ZÜRICHBERGSTRASSE 44. REPRODUCTION REQUIRES WRITTEN CONSENT OF THE PARTNERSHIP.
          </p>
          <span className="text-[#16171a] shrink-0 tabular-nums">
            RECORD NO. AV-2026-COL
          </span>
        </div>
      </div>
    </section>
  );
}

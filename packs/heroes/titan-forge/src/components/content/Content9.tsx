import React from 'react';

interface IndexGroup {
  part: string;
  heading: string;
  entries: { code: string; title: string; ref: string; highlight?: boolean }[];
}

export function Content9() {
  const groups: IndexGroup[] = [
    {
      part: 'PART I',
      heading: 'SUBTERRANEAN EXCAVATION',
      entries: [
        { code: '01.1', title: 'Seismic Geophone Array Calibration & Bedrock Mapping', ref: 'P. 004' },
        { code: '01.2', title: 'TF-900 Hydraulic Boom Load Envelope & Torque Curves', ref: 'P. 018', highlight: true },
        { code: '01.3', title: 'Diamond Core DX-4 Bit Wear & Tungsten Replacement', ref: 'P. 032' },
        { code: '01.4', title: 'Autonomous Haulage Docking Tolerances (±4mm)', ref: 'P. 047' },
      ],
    },
    {
      part: 'PART II',
      heading: 'HYDRAULICS & ALLOY STRESS',
      entries: [
        { code: '02.1', title: '14,000 PSI Closed-Circuit Manifold Thermal Shedding', ref: 'P. 061' },
        { code: '02.2', title: '4340 Chromoly Swivel Yoke Fatigue Limits', ref: 'P. 078' },
        { code: '02.3', title: 'Triple-Braid Steel Umbilical Burst Certification', ref: 'P. 094', highlight: true },
      ],
    },
    {
      part: 'PART III',
      heading: 'NEURAL TELEMETRY MESH',
      entries: [
        { code: '03.1', title: '0.04ms Fiber Backbone Ring Redundancy Protocol', ref: 'P. 112' },
        { code: '03.2', title: 'Ultrasonic Acoustic Emission Micro-Fracture Detection', ref: 'P. 129', highlight: true },
        { code: '03.3', title: 'Orbital Satellite Failover for Sub-Zero Basins', ref: 'P. 146' },
      ],
    },
    {
      part: 'PART IV',
      heading: 'INDUCTION SMELTING & ASSAY',
      entries: [
        { code: '04.1', title: 'Cell-X 1,450°C Crucible Refractory Lining Schedules', ref: 'P. 164' },
        { code: '04.2', title: 'Laser Spectroscopy Inline Ore Grade Verification', ref: 'P. 188' },
        { code: '04.3', title: 'ISO-9001 Bullion Output Audit & Chain of Custody', ref: 'P. 204' },
      ],
    },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-4 border-black pb-4 mb-10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#f25c05] font-bold block mb-1">
              MASTER TECHNICAL DIRECTORY // INDEX 09
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              SPECIFICATION <span className="text-[#f25c05]">INDEX</span>.
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase text-right text-neutral-600">
            <div>MANUAL REV 4.2 // 218 PAGES</div>
            <div>CLASSIFICATION: INDUSTRIAL PUBLIC</div>
          </div>
        </div>

        {/* Dense Two-Column Typographic Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          {groups.map((group) => (
            <div key={group.part} className="border-t-2 border-black pt-4">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5 uppercase">
                  {group.part}
                </span>
                <h3 className="font-black text-lg uppercase tracking-tight">
                  {group.heading}
                </h3>
              </div>

              <div className="space-y-3">
                {group.entries.map((entry) => (
                  <div
                    key={entry.code}
                    className="flex items-baseline gap-2 group font-mono text-xs"
                  >
                    <span
                      className={`font-bold shrink-0 tabular-nums ${
                        entry.highlight ? 'text-[#f25c05]' : 'text-neutral-500'
                      }`}
                    >
                      {entry.code}
                    </span>
                    <span className="font-sans font-bold uppercase tracking-tight text-sm leading-snug group-hover:text-[#f25c05] transition-colors">
                      {entry.title}
                    </span>
                    <span
                      className="flex-1 border-b border-dotted border-black mx-1 min-w-[20px]"
                      aria-hidden="true"
                    />
                    <span className="font-bold shrink-0 tabular-nums text-[11px] bg-white px-1 border border-black">
                      {entry.ref}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

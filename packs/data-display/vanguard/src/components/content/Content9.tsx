import React from 'react';

interface IndexGroup {
  catCode: string;
  catTitle: string;
  entries: { num: string; title: string; rev: string; page: string }[];
}

const INDEX_GROUPS: IndexGroup[] = [
  {
    catCode: 'PART I',
    catTitle: 'AEROTHERMODYNAMICS & SHOCK GEOMETRY',
    entries: [
      { num: '1.01', title: 'Oblique Shockwave Attachment Across Cranked-Arrow Chines', rev: 'REV C', page: '014' },
      { num: '1.02', title: 'Real-Gas Dissociation & Boundary Layer Enthalpy Flux', rev: 'REV B', page: '029' },
      { num: '1.03', title: 'Tungsten-Rhenium Pitot Nose Cap Ablation Profiles', rev: 'REV D', page: '041' },
      { num: '1.04', title: 'Schlieren Wind Tunnel Calibration — Series WT-400', rev: 'REV A', page: '058' },
    ],
  },
  {
    catCode: 'PART II',
    catTitle: 'COMBINED-CYCLE SCRAMJET PROPULSION',
    entries: [
      { num: '2.01', title: 'Turbofan-to-Ramjet Louver Handoff Kinematics at Mach 2.8', rev: 'REV E', page: '074' },
      { num: '2.02', title: 'Supersonic Cavity Flameholder Resonance Suppression', rev: 'REV B', page: '092' },
      { num: '2.03', title: 'Endothermic Liquid Hydrogen Regenerative Cooling Circuits', rev: 'REV C', page: '118' },
      { num: '2.04', title: 'Single-Expansion Ramp Nozzle Thrust Vectoring Envelope', rev: 'REV A', page: '136' },
    ],
  },
  {
    catCode: 'PART III',
    catTitle: 'AUTONOMOUS CONTROL LAWS & RANGE TELEMETRY',
    entries: [
      { num: '3.01', title: 'Triple-Redundant Fiber-Optic Inertial Alignment Protocols', rev: 'REV D', page: '154' },
      { num: '3.02', title: 'Unstart Recovery Spill-Door Actuation Under 4 Milliseconds', rev: 'REV B', page: '171' },
      { num: '3.03', title: '409.2 MHz Encrypted Downlink Relay — Edwards to Nellis', rev: 'REV A', page: '198' },
    ],
  },
];

export function Content9() {
  return (
    <section
      aria-label="Technical Dossier Table of Contents"
      className="w-full bg-[#16181d] text-white font-mono border-b border-[#2a2d35] py-14 px-4 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="border-b-2 border-[#3a3e4c] pb-4 mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.28em] text-[#ff3d00] font-bold uppercase block">
              MASTER TECHNICAL DOSSIER // INDEX 09
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-sans uppercase tracking-tight mt-1">
              X-99 SPECTRE FLIGHT MANUAL VOL. IV
            </h2>
          </div>
          <span className="text-xs text-zinc-400 tabular-nums">PAGES 001–212 // UNABRIDGED</span>
        </div>

        <div className="space-y-10">
          {INDEX_GROUPS.map((group) => (
            <div key={group.catCode} className="space-y-3">
              <div className="flex items-baseline gap-4 border-b border-[#2a2d35] pb-1.5">
                <span className="text-xs font-black text-[#ff3d00] tracking-widest">
                  {group.catCode}
                </span>
                <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight text-white">
                  {group.catTitle}
                </h3>
              </div>

              <div className="space-y-2.5 pl-0 sm:pl-6">
                {group.entries.map((entry) => (
                  <div
                    key={entry.num}
                    className="flex items-baseline gap-3 text-xs sm:text-sm group"
                  >
                    <span className="text-[#ff3d00] font-bold tabular-nums shrink-0 w-10">
                      {entry.num}
                    </span>
                    <span className="text-zinc-200 font-sans font-medium group-hover:text-white transition-colors">
                      {entry.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-[#3a3e4c] min-w-[24px] translate-y-[-3px]"
                    />
                    <span className="text-[10px] text-zinc-500 shrink-0 hidden sm:inline">
                      {entry.rev}
                    </span>
                    <span className="text-xs font-extrabold text-white tabular-nums shrink-0">
                      P.{entry.page}
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

import React from 'react';

const STAIR_STEPS = [
  {
    num: '01',
    phase: 'ALLOY REDUCTION',
    duration: 'WEEKS 01–04',
    title: 'Vacuum-Induction Smelting',
    detail:
      'Raw Grade-5 titanium billets and 18K rose gold ingots are melted under argon shield to eradicate microscopic porosity prior to CNC blanking.',
    coordinate: 'FURNACE BAY A // 1,668°C',
  },
  {
    num: '02',
    phase: 'ESCAPEMENT MILLING',
    duration: 'WEEKS 05–12',
    title: 'Sub-Micron Bridge Turning',
    detail:
      'Mainplates and tourbillon cages are cut to 0.002mm tolerances, then annealed over three thermal cycles to relieve internal metallurgical tension.',
    coordinate: 'ATELIER BENCH 04 // ±2μm',
  },
  {
    num: '03',
    phase: 'ARTISANAL FINISHING',
    duration: 'WEEKS 13–24',
    title: 'Black Polish & Anglage',
    detail:
      'Every steel bridge bevel is burnished by hand using gentian wood stalks and graded diamond paste until light reflects at a single specular angle.',
    coordinate: 'NORTH STUDIO // 420 HRS',
  },
  {
    num: '04',
    phase: 'CHRONOMETRIC TRIAL',
    duration: 'WEEKS 25–30',
    title: 'Six-Position Acoustic Run',
    detail:
      'Complete movements undergo 360 continuous hours of thermal fluctuation and positional variance logging inside anechoic observatory vaults.',
    coordinate: 'OBSERVATORY CELL // 18°C–38°C',
  },
  {
    num: '05',
    phase: 'SOVEREIGN CUSTODY',
    duration: 'WEEK 32',
    title: 'Sealed Vault Induction',
    detail:
      'Signed caliber certificates are etched onto titanium plates and deposited alongside the timekeeper within the patron’s biometric chamber.',
    coordinate: 'VAULT LEVEL -4 // N 51°30′',
  },
];

export function Content2() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-2">
              CHRONOLOGICAL DESCENT // PROCESS RAIL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">
              Thirty-Two Weeks from Ore to Vault
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#7a8494]">STEPPED CALIBRATION TRACE</span>
        </div>

        {/* Diagonal Staircase with Continuous Physical Connector Spine */}
        <div className="relative flex flex-col">
          {STAIR_STEPS.map((step, index) => {
            const offsetClasses = [
              'md:ml-[0%] md:w-[46%]',
              'md:ml-[13%] md:w-[46%]',
              'md:ml-[26%] md:w-[46%]',
              'md:ml-[39%] md:w-[46%]',
              'md:ml-[52%] md:w-[48%]',
            ][index];

            return (
              <div key={step.num} className={`relative ${offsetClasses} ${index > 0 ? '-mt-2 md:-mt-4' : ''}`}>
                {/* Physical Stepped Connector Line Entering from Previous Step */}
                {index > 0 && (
                  <div className="hidden md:block absolute -left-16 top-6 w-16 h-12 pointer-events-none" aria-hidden="true">
                    {/* Vertical drop from previous step's bottom rail */}
                    <div className="absolute left-0 -top-10 bottom-6 w-[1px] bg-[#d4b06a]/60" />
                    {/* Horizontal dogleg into current step node */}
                    <div className="absolute left-0 top-6 right-0 h-[1px] bg-[#d4b06a]/60" />
                    {/* Elbow crosshair */}
                    <span className="absolute -left-[3px] top-[21px] w-1.5 h-1.5 border border-[#d4b06a] bg-[#0b0d10]" />
                  </div>
                )}

                {/* Mobile left rail */}
                <div className="md:hidden absolute left-2 top-0 bottom-0 w-[1px] bg-[#d4b06a]/40" aria-hidden="true" />

                <div className="pl-8 md:pl-0 pb-10 relative">
                  {/* Top Horizontal Rule Threading the Step */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#d4b06a] text-xs leading-none" aria-hidden="true">◆</span>
                    <span className="font-mono text-xs text-[#d4b06a] tracking-widest">{step.num}</span>
                    <div className="h-[1px] flex-1 bg-white/15" />
                    <span className="font-mono text-[10px] text-[#7a8494] tracking-wider">{step.duration}</span>
                  </div>

                  {/* Unboxed Open Typography Stepped Content */}
                  <div className="pl-5 border-l border-white/15">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#7a8494] uppercase block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="font-serif text-2xl text-[#ece8e1] mb-2">{step.title}</h3>
                    <p className="font-sans text-xs text-[#7a8494] leading-relaxed mb-3 max-w-md">
                      {step.detail}
                    </p>
                    <span className="text-[10px] font-mono text-[#d4b06a]/80 tracking-wider">
                      {step.coordinate}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

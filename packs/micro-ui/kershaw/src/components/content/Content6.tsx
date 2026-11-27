import React from 'react';

export function Content6() {
  const passages = [
    {
      id: 'P.01',
      heading: 'I. THERMAL BOUNDARY LAYER IN TITANIUM EXHAUST RUNNERS',
      prose:
        'During sustained full-load runs inside Cell 04, exhaust gas velocity reaches Mach 0.72 at the turbine volute tongue. Standard stainless manifolds experience grain-boundary creep after 14 hours at 890°C, distorting primary runner alignment and inducing asymmetric backpressure pulses across Bank B cylinders.',
      marginType: 'note',
      marginCode: 'M.01 // METALLURGY REF',
      marginTitle: 'INCONEL 713C VS 321-SS CREEP',
      marginBody: 'Measured 0.018 mm flange warp at 890.4°C soak (Run 07/40). Ceramic inner-coat reduces shell skin radiation by 112°C.',
    },
    {
      id: 'P.02',
      heading: 'II. OIL FILM CAVITATION AT 8,400 RPM CRANK SPEED',
      prose:
        'At extreme rotational speeds, entrained combustion gases aerate crankcase return oil into compressible foam. If scavenge stages fail to separate vapor before the pressure gallery, main bearing hydrodynamic wedge thickness collapses below 2.4 microns—initiating instantaneous journal wipe.',
      marginType: 'plate',
      marginCode: 'M.02 // STAGE PLATE',
      marginTitle: 'HYDRODYNAMIC WEDGE TRACE',
      marginBody: '5-lobe dry-sump stage maintains 6.45 BAR gallery pressure at 94.2°C oil viscosity.',
    },
    {
      id: 'P.03',
      heading: 'III. PIEZO STRATIFIED MICRO-INJECTION TIMING',
      prose:
        'Replacing solenoid injectors with stacked piezoelectric crystals cuts needle opening latency from 0.48 ms to 0.11 ms. This permits a late secondary post-TDC trim pulse that cools piston crown hotspots without sacrificing peak cylinder brake mean effective pressure.',
      marginType: 'quote',
      marginCode: 'M.03 // LAB MARGINALIA',
      marginTitle: 'FIELD ANNOTATION — K. VANCE',
      marginBody: '“Cutting needle latency by 370 microseconds gave us +18 NM across the 6,200–7,400 RPM plateau with zero knock threshold drift.”',
    },
    {
      id: 'P.04',
      heading: 'IV. EDDY-CURRENT ABSORPTION CALIBRATION',
      prose:
        'Unlike hydraulic water-brake dynamometers whose load curve lags fluid valve actuation, our water-cooled stator adjusts magnetic excitation in 1.2 milliseconds—holding crank RPM mathematically flat while mapping steady-state fuel maps.',
      marginType: 'note',
      marginCode: 'M.04 // INSTRUMENTATION',
      marginTitle: 'CALIBRATION CERT #40-KD',
      marginBody: 'Laser-verified torque arm zeroed to ±0.02% DIN 70020 standard prior to Run 07 ignition.',
    },
  ];

  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Monograph Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 mb-10 border-b border-[#262c36]">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.3em] text-[#ffd500] uppercase">
              // TECHNICAL MONOGRAPH · CELL 04 ARCHIVE
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mt-2 leading-none">
              FIELD NOTES ON <span className="text-[#ffd500]">EXTREME LOAD</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end justify-between text-[11px] text-zinc-500 border-l border-[#22262f] pl-6">
            <span>MARGINALIA ANNOTATED EDITION · KD-998 V8</span>
            <span className="text-[#ffd500]">COLUMN RATIO 42 : 58</span>
          </div>
        </div>

        {/* Paired Narrow Main Text Column + Wide Aligned Marginalia Gutter */}
        <div className="space-y-12">
          {passages.map((p) => (
            <div key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start">
              {/* Narrow Main Prose Column (5/12 = ~42% width) */}
              <div className="lg:col-span-5 lg:pr-8">
                <div className="flex items-center gap-2 text-[10px] text-[#ffd500] font-bold mb-2">
                  <span>{p.id}</span>
                  <span className="w-4 h-px bg-[#ffd500]" />
                  <span className="tracking-widest uppercase">{p.heading}</span>
                </div>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {p.prose}
                </p>
              </div>

              {/* Alignment Gutter Bridge Line (1/12) */}
              <div className="hidden lg:flex lg:col-span-1 items-center pt-2">
                <div className="w-2 h-2 bg-[#ffd500] shrink-0" />
                <div className="flex-1 h-px border-b border-dashed border-[#ffd500]/50" />
                <div className="w-1.5 h-1.5 border border-[#ffd500] shrink-0" />
              </div>

              {/* Wide Margin Column (6/12 = 50%) Holding Vertically Aligned Marginalia */}
              <div className="lg:col-span-6 lg:pl-4">
                {p.marginType === 'note' && (
                  <div className="border-t border-[#262c36] pt-2.5 flex flex-col sm:flex-row sm:items-baseline gap-4">
                    <div className="sm:w-44 shrink-0">
                      <span className="text-[10px] text-[#ffd500] font-bold block">{p.marginCode}</span>
                      <span className="text-xs font-bold text-white uppercase">{p.marginTitle}</span>
                    </div>
                    <p className="text-xs font-sans text-zinc-400 leading-relaxed">{p.marginBody}</p>
                  </div>
                )}

                {p.marginType === 'plate' && (
                  <div className="bg-[#14161a] border border-[#262c36] p-4 flex flex-col sm:flex-row gap-4 items-center">
                    {/* Small Dark Technical Stage SVG Plate */}
                    <div className="w-full sm:w-40 h-20 bg-[#0c0d0f] border border-[#22262f] flex items-center justify-center shrink-0 relative">
                      <svg viewBox="0 0 140 60" className="w-full h-full p-2">
                        <polyline
                          points="4,46 22,42 38,30 58,34 78,16 98,19 118,12 136,14"
                          fill="none"
                          stroke="#ffd500"
                          strokeWidth="1.5"
                        />
                        <line x1="0" y1="30" x2="140" y2="30" stroke="#262c36" strokeDasharray="3 3" />
                      </svg>
                      <span className="absolute bottom-1 right-1.5 text-[8px] text-[#ffd500]">6.45 BAR</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#ffd500] font-bold block">{p.marginCode}</span>
                      <span className="text-xs font-bold text-white uppercase block mb-1">{p.marginTitle}</span>
                      <p className="text-[11px] font-sans text-zinc-400">{p.marginBody}</p>
                    </div>
                  </div>
                )}

                {p.marginType === 'quote' && (
                  <div className="border-l-2 border-[#ffd500] pl-5 py-1">
                    <span className="text-[10px] text-zinc-500 tracking-widest block mb-1">
                      {p.marginCode} · {p.marginTitle}
                    </span>
                    <p className="font-display text-xl font-bold uppercase tracking-wide text-[#ffd500] leading-snug">
                      {p.marginBody}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

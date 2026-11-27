import React from 'react';

export function Content6() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono text-[#111111] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Monograph Running Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#111111] pb-3 mb-10 text-[9px] uppercase tracking-[0.25em]">
          <span>CONTENT-06 // ANNOTATED MONOGRAPH FOLIO // MARGINALIA ALIGNMENT</span>
          <span className="font-bold">CHAPTER IV — LAMINAR BOUNDARY CONTROL</span>
        </div>

        {/* Passage 1 + Aligned Margin Note [01] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#111111] pb-8 mb-8 gap-6 items-start">
          <div className="lg:col-span-5 lg:pr-8 lg:border-r lg:border-[#111111]">
            <div className="text-[9px] font-bold tracking-widest text-[#555555] mb-2">
              § 4.1 // STUTTGART TUNNEL PROTOCOL
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-3">
              VORTEX SEALING UNDER PITCH
            </h3>
            <p className="text-[11px] leading-relaxed text-[#222222]">
              During hard braking from 310 km/h, front ride height compresses by 28 millimeters. Conventional flat-floor prototypes lose up to 34% of rear diffuser suction when the front splitter stalls.[1] Our curved titanium strakes bleed excess pressure laterally before separation reaches the Venturi throat.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-4 pt-1">
            <div className="shrink-0 w-10 h-6 bg-[#111111] text-[#e8e8e6] text-[9px] font-bold flex items-center justify-center">
              [1]
            </div>
            <div className="w-full sm:w-56 border border-[#111111] bg-[#111111] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
                alt="Wind tunnel smoke flow visualization over K-99 prototype"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover grayscale contrast-125"
              />
              <div className="px-2 py-1 text-[8px] text-[#e8e8e6] tracking-widest uppercase">
                FIG 1.4 // SMOKE RAKE RUN 042
              </div>
            </div>
            <div className="text-[9px] uppercase leading-relaxed text-[#444444] border-t border-[#111111] pt-2 sm:border-t-0 sm:pt-0">
              <div className="font-bold text-[#111111] mb-1">MARGIN NOTE // REYNOLDS 6.4×10⁶</div>
              Laminar smoke visualization confirms attached boundary layer across rear deck at 14° yaw.
            </div>
          </div>
        </div>

        {/* Passage 2 + Aligned Margin Pull-Fragment [02] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#111111] pb-8 mb-8 gap-6 items-start">
          <div className="lg:col-span-5 lg:pr-8 lg:border-r lg:border-[#111111]">
            <div className="text-[9px] font-bold tracking-widest text-[#555555] mb-2">
              § 4.2 // THERMAL EXHAUST SCAVENGING
            </div>
            <p className="text-[11px] leading-relaxed text-[#222222]">
              Exhaust gas velocity exiting the four ceramic-bearing turbines accelerates boundary flow across the upper diffuser exit plane.[2] Rather than shielding heat, thin-wall Inconel routing energizes low-pressure wake recovery directly behind the magnesium transaxle housing.
            </p>
          </div>

          <div className="lg:col-span-7 flex items-start gap-4">
            <div className="shrink-0 w-10 h-6 border border-[#111111] bg-[#f4f4f0] text-[9px] font-bold flex items-center justify-center">
              [2]
            </div>
            <div className="flex-1 border-y border-[#111111] py-3">
              <div className="text-lg md:text-2xl font-black uppercase tracking-tight leading-none">
                “EXHAUST PLUME INCREASES REAR EXTRACTION BY +11.8% AT FULL BOOST.”
              </div>
              <div className="text-[8px] tracking-[0.22em] text-[#555555] mt-2 uppercase">
                EXCERPT // DR. M. WEBER — TUNNEL LOG FOLIO 19B
              </div>
            </div>
          </div>
        </div>

        {/* Passage 3 + Aligned Margin Instrument Plate & Swatch [03] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 lg:pr-8 lg:border-r lg:border-[#111111]">
            <div className="text-[9px] font-bold tracking-widest text-[#555555] mb-2">
              § 4.3 // DRIVER COCKPIT VERIFICATION
            </div>
            <p className="text-[11px] leading-relaxed text-[#222222]">
              Every aerodynamic map adjustment remains accessible via physical knurled rotary switches mounted directly inside the driver reach envelope.[3] No multi-layer touch menus exist inside the K-99 monocoque cockpit.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-4">
            <div className="shrink-0 w-10 h-6 bg-[#111111] text-[#e8e8e6] text-[9px] font-bold flex items-center justify-center">
              [3]
            </div>
            <div className="w-28 h-28 border border-[#111111] bg-[#111111] shrink-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Machined aluminum toggle switches and gauges inside K-99 cockpit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="text-[9px] uppercase space-y-2 flex-1">
              <div className="font-bold">FIG 1.9 // COCKPIT SWITCHBANK</div>
              <p className="text-[#555555] leading-relaxed">
                Mil-spec mechanical guards prevent accidental actuation under 2.4G lateral cornering load.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[8px] text-[#555555]">REF CHIPS:</span>
                {['#111111', '#666666', '#B3B3B3', '#E8E8E6'].map((c) => (
                  <span key={c} className="w-3 h-3 border border-[#111111] inline-block" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

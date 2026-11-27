import React from 'react';

interface ToothItem {
  id: string;
  side: 'left' | 'right';
  axisLabel: string;
  title: string;
  body: string;
  spec: string;
}

const TEETH: ToothItem[] = [
  {
    id: '01',
    side: 'left',
    axisLabel: 'COMPRESSION',
    title: 'Earth-Anchored Retaining Spine',
    body: 'Dense reinforced concrete walls resist lateral mountain pressure, establishing an immovable thermal core.',
    spec: '450 MM · C40/50',
  },
  {
    id: '02',
    side: 'right',
    axisLabel: 'TENSION',
    title: 'Cantilevered Timber Canopy',
    body: 'Pre-stressed laminated Douglas fir beams reach 4.8 meters past the concrete line without perimeter struts.',
    spec: '4,800 MM SPAN',
  },
  {
    id: '03',
    side: 'left',
    axisLabel: 'ENCLOSURE',
    title: 'Deep Recessed Shadow Threshold',
    body: 'Entry portals set back 1.4 meters into the facade shield glazed frames from direct driving rain.',
    spec: '1,400 MM REVEAL',
  },
  {
    id: '04',
    side: 'right',
    axisLabel: 'ILLUMINATION',
    title: 'Clerestory Zenithal Slot',
    body: 'Continuous 280mm overhead glazing washes the north wall with calm, shadowless Nordic daylight.',
    spec: '280 MM APERTURE',
  },
  {
    id: '05',
    side: 'left',
    axisLabel: 'SILENCE',
    title: 'Acoustic Slatted Soffit',
    body: 'Unfinished spruce battens backed with mineral wool absorb 78% of mid-frequency interior reverberation.',
    spec: 'NRC 0.78',
  },
];

export function Content3() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        <div className="max-w-xl space-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              STRUCTURAL INTERLOCK — AXIS MESH
            </span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">
            Opposing Forces Sharing One Spine
          </h2>
        </div>

        <div className="relative">
          {/* Continuous center vertical axis line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#16171a] -translate-x-1/2"
          />
          <div
            aria-hidden="true"
            className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-[#16171a]"
          />

          <div className="space-y-4 md:space-y-0">
            {TEETH.map((item, idx) => {
              const isLeft = item.side === 'left';
              return (
                <div
                  key={item.id}
                  className={`relative md:grid md:grid-cols-2 items-center ${
                    idx > 0 ? 'md:-mt-6' : ''
                  }`}
                >
                  {isLeft ? (
                    <>
                      <div className="pl-8 md:pl-0 md:pr-0 md:mr-[-44px] relative z-10">
                        <div className="bg-[#f0efeb] border border-[#16171a] p-6 pr-12 space-y-2.5">
                          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                            <span className="text-[#b5482e]">{item.id} · {item.axisLabel}</span>
                            <span className="text-stone-500 tabular-nums">{item.spec}</span>
                          </div>
                          <h3 className="text-lg font-medium text-[#16171a]">{item.title}</h3>
                          <p className="text-xs text-stone-600 leading-relaxed">{item.body}</p>
                        </div>
                        {/* Axis pin */}
                        <span
                          aria-hidden="true"
                          className="hidden md:block absolute right-[41px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] bg-[#b5482e]"
                        />
                        <span
                          aria-hidden="true"
                          className="md:hidden absolute left-[9px] top-6 w-[7px] h-[7px] bg-[#b5482e]"
                        />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="pl-8 md:pl-0 md:ml-[-44px] relative z-20">
                        <div className="bg-[#fafaf8] border border-[#16171a] p-6 pl-12 space-y-2.5">
                          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                            <span className="text-[#b5482e]">{item.id} · {item.axisLabel}</span>
                            <span className="text-stone-500 tabular-nums">{item.spec}</span>
                          </div>
                          <h3 className="text-lg font-medium text-[#16171a]">{item.title}</h3>
                          <p className="text-xs text-stone-600 leading-relaxed">{item.body}</p>
                        </div>
                        <span
                          aria-hidden="true"
                          className="hidden md:block absolute left-[41px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] bg-[#16171a]"
                        />
                        <span
                          aria-hidden="true"
                          className="md:hidden absolute left-[9px] top-6 w-[7px] h-[7px] bg-[#16171a]"
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

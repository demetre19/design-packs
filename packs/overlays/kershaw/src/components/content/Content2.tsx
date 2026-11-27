import React from 'react';
import { Hexagon } from 'lucide-react';

export function Content2() {
  const steps = [
    {
      step: '01',
      phase: 'STAGE 01 // PRE-IGNITION FLUID PURGE',
      title: 'COLD PRESSURIZATION & BEARING PRE-LUBE',
      metric: '4.20 BAR · 22.0°C',
      detail: 'External electric scavenge pump primes main galleries before crank rotation begins, eliminating dry journal shear.',
      offsetClass: 'md:ml-[0%] md:w-[44%]',
      anchorX: '8%',
    },
    {
      step: '02',
      phase: 'STAGE 02 // THERMAL EQUILIBRIUM RAMP',
      title: 'STAGED WARM-UP TO 88°C SUMP TARGET',
      metric: '3,200 RPM · 88.4°C',
      detail: 'Controlled 15-minute idle-to-midload progression stabilizes forged piston crown expansion to 0.045 mm clearance.',
      offsetClass: 'md:ml-[14%] md:w-[44%]',
      anchorX: '22%',
    },
    {
      step: '03',
      phase: 'STAGE 03 // TRANSIENT SPOOL SWEEP',
      title: 'TWIN-SCROLL BOOST THRESHOLD MAPPING',
      metric: '2.84 BAR · 6,800 RPM',
      detail: 'Closed-loop wastegate duty cycles step from 25% to 92% across 500 RPM intervals while logging compressor surge margins.',
      offsetClass: 'md:ml-[28%] md:w-[44%]',
      anchorX: '36%',
    },
    {
      step: '04',
      phase: 'STAGE 04 // PEAK REDLINE HOLD',
      title: 'SUSTAINED BRAKE TORQUE SATURATION',
      metric: '8,400 RPM · 612 NM',
      detail: 'Eddy-current stator clamps crank speed at peak volumetric demand for 180 seconds to verify exhaust valve thermal dissipation.',
      offsetClass: 'md:ml-[42%] md:w-[44%]',
      anchorX: '50%',
    },
    {
      step: '05',
      phase: 'STAGE 05 // CONTROLLED HEAT-SOAK DECEL',
      title: 'TURBO OIL COKING PREVENTION & AUDIT',
      metric: '1,100 RPM · 94.2°C',
      detail: 'Post-load cooling loop circulates 120 L/min through turbine center cartridges prior to borescope cylinder inspection.',
      offsetClass: 'md:ml-[56%] md:w-[44%]',
      anchorX: '64%',
    },
  ];

  return (
    <section className="relative bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#ffd500] uppercase block mb-2">
              // PROTOCOL SEQUENCE · CELL 04 DESCENT
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none">
              FIVE-STAGE DYNO <span className="text-[#ffd500]">RAMP CASCADE</span>
            </h2>
          </div>
          <div className="text-[11px] text-zinc-400 tabular-nums border-l border-[#ffd500] pl-4">
            <div>TOTAL TEST CYCLE: <strong className="text-white">48 MIN 20 SEC</strong></div>
            <div>TELEMETRY RATE: <strong className="text-[#ffd500]">1,000 HZ</strong></div>
          </div>
        </div>

        {/* Spiral Staircase Diagonal Conduit Architecture */}
        <div className="relative space-y-6 md:space-y-0">
          {steps.map((item, idx) => (
            <div key={item.step} className={`${item.offsetClass} relative`}>
              {/* Step Header Bar Threaded Directly to Connector */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-[#ffd500] text-black flex items-center justify-center text-xs font-extrabold shrink-0">
                  {item.step}
                </div>
                <span className="text-[10px] tracking-[0.2em] text-[#ffd500] uppercase font-bold">
                  {item.phase}
                </span>
                <div className="flex-1 h-px bg-[#262c36]" />
                <Hexagon className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
              </div>

              {/* Open Architectural Step Content */}
              <div className="ml-3 pl-6 pr-4 py-3 border-l-2 border-[#ffd500]/50 bg-gradient-to-r from-[#14161a]/90 to-transparent">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-[#ffd500] tabular-nums bg-[#0c0d0f] px-2 py-0.5 border border-[#262c36]">
                    {item.metric}
                  </span>
                </div>
                <p className="text-xs font-sans text-zinc-400 leading-relaxed max-w-md">
                  {item.detail}
                </p>
              </div>

              {/* Physical Gutter Elbow Conduit Connecting Down & Right to Next Step */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:flex items-end ml-3 h-9 relative"
                >
                  <div className="w-[31.8%] h-full border-l-2 border-b-2 border-[#ffd500] relative">
                    <span className="absolute -right-1.5 -bottom-1.5 w-2.5 h-2.5 bg-[#0c0d0f] border-2 border-[#ffd500]" />
                  </div>
                  <div className="h-4 border-l-2 border-dashed border-[#ffd500] translate-y-4 -ml-0.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

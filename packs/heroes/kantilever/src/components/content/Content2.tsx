import React from 'react';
import { ArrowDownRight } from 'lucide-react';

interface StairStep {
  index: string;
  elevation: string;
  title: string;
  detail: string;
  duration: string;
  indentClass: string;
}

export const Content2: React.FC = () => {
  const steps: StairStep[] = [
    {
      index: '01',
      elevation: '+0.00 m',
      title: 'GEOTECHNICAL CORE PROBING',
      detail: 'Laser-scanned cliff bathymetry and 45 m diamond-core strata sampling along the Zurich fault line.',
      duration: 'WEEKS 01–04',
      indentClass: 'lg:ml-[0%]',
    },
    {
      index: '02',
      elevation: '+4.20 m',
      title: 'TENSION ABUTMENT CASTING',
      detail: 'Pouring high-density C60/75 counterweight piers anchored directly to shear-tested granite.',
      duration: 'WEEKS 05–14',
      indentClass: 'lg:ml-[14%]',
    },
    {
      index: '03',
      elevation: '+8.40 m',
      title: '12° DIAGONAL CHORD ASSEMBLY',
      detail: 'Crane rigging of pre-cambered S690QL box trusses establishing the primary cantilevered spine.',
      duration: 'WEEKS 15–24',
      indentClass: 'lg:ml-[28%]',
    },
    {
      index: '04',
      elevation: '+12.60 m',
      title: 'POST-TENSION RELEASE & DEFLECTION CHECK',
      detail: 'Controlled jack release confirming 18.0 m overhang settles within ±0.02 mm of modeled camber.',
      duration: 'WEEKS 25–28',
      indentClass: 'lg:ml-[42%]',
    },
    {
      index: '05',
      elevation: '+18.00 m',
      title: 'ENVELOPE CLOSURE & LOUVER CALIBRATION',
      detail: 'Installation of 14° anodized solar baffles and acoustic glazing across suspended terrace bays.',
      duration: 'WEEKS 29–38',
      indentClass: 'lg:ml-[56%]',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header tucked top-right / asymmetric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#14161a]/20">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14161a]/60">
              METHODOLOGY SEQUENCE · ERECTION TRAJECTORY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              THE DIAGONAL ASCENT
            </h2>
          </div>
          <div className="font-mono text-xs uppercase bg-[#14161a] text-[#ffc72c] px-3 py-1.5 transform skew-x-[-12deg] self-start md:self-auto">
            SLOPE VECTOR: 12.5° CONTINUOUS
          </div>
        </div>

        {/* Continuous Drawn Diagonal Connector Thread (Desktop SVG overlay) */}
        <div className="relative">
          <svg
            aria-hidden="true"
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 720"
            preserveAspectRatio="none"
          >
            {/* Faint architectural datum grid lines */}
            <line x1="0" y1="72" x2="1000" y2="72" stroke="#14161a" strokeOpacity="0.08" strokeDasharray="4 6" />
            <line x1="0" y1="220" x2="1000" y2="220" stroke="#14161a" strokeOpacity="0.08" strokeDasharray="4 6" />
            <line x1="0" y1="368" x2="1000" y2="368" stroke="#14161a" strokeOpacity="0.08" strokeDasharray="4 6" />
            <line x1="0" y1="516" x2="1000" y2="516" stroke="#14161a" strokeOpacity="0.08" strokeDasharray="4 6" />
            <line x1="0" y1="664" x2="1000" y2="664" stroke="#14161a" strokeOpacity="0.08" strokeDasharray="4 6" />

            {/* Continuous stepped diagonal spine threading each step */}
            <polyline
              points="24,35 164,188 304,342 444,495 584,648"
              fill="none"
              stroke="#14161a"
              strokeWidth="2.5"
            />
            <polyline
              points="24,35 164,188 304,342 444,495 584,648"
              fill="none"
              stroke="#ffc72c"
              strokeWidth="6"
              strokeOpacity="0.35"
            />
          </svg>

          {/* Descending diagonally-offset steps */}
          <div className="space-y-8 lg:space-y-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.index}
                className={`${step.indentClass} lg:w-[44%] flex items-start gap-5 group`}
              >
                {/* Thread node */}
                <div className="relative shrink-0 mt-1">
                  <div className="w-11 h-11 bg-[#14161a] text-[#ffc72c] flex items-center justify-center font-mono text-xs font-bold transform skew-x-[-12deg] border border-[#14161a] group-hover:bg-[#ffc72c] group-hover:text-[#14161a] transition-colors">
                    <span className="transform skew-x-[12deg]">{step.index}</span>
                  </div>
                </div>

                {/* Step body with angled hairline bracket */}
                <div className="flex-1 border-b border-[#14161a]/25 pb-5 pt-0.5 bg-[#f7f6f3]/90">
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px] mb-1.5 tabular-nums">
                    <span className="bg-[#ffc72c] text-[#14161a] px-2 py-0.5 font-bold">
                      EL. {step.elevation}
                    </span>
                    <span className="text-[#14161a]/60 flex items-center gap-1">
                      {step.duration} <ArrowDownRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold uppercase tracking-tight">{step.title}</h3>
                  <p className="text-xs text-[#14161a]/75 font-sans leading-relaxed mt-1.5">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

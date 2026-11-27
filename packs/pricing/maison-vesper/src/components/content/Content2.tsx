import React from 'react';
import { Scissors } from 'lucide-react';

interface StepNode {
  roman: string;
  duration: string;
  title: string;
  detail: string;
  spec: string;
  offsetClass: string;
}

const STEPS: StepNode[] = [
  {
    roman: 'ÉTAPE I',
    duration: '04 H',
    title: 'L’Esquisse au Fusain',
    detail: 'Première silhouette tracée sur papier vergé à partir des proportions exactes du modèle.',
    spec: 'CARNET N° 08 — MINES 2B',
    offsetClass: 'md:ml-[0%]',
  },
  {
    roman: 'ÉTAPE II',
    duration: '12 H',
    title: 'La Toile Écrue',
    detail: 'Moulage à même le buste en coton non blanchi afin de fixer l’équilibre des épaules et le tombé.',
    spec: 'TOLÉRANCE : ± 0.5 MM',
    offsetClass: 'md:ml-[13%]',
  },
  {
    roman: 'ÉTAPE III',
    duration: '18 H',
    title: 'La Coupe aux Ciseaux',
    detail: 'Tracé à la craie de tailleur sur l’étoffe définitive reposée vingt-quatre heures sur marbre.',
    spec: 'DROIT FIL STRICT',
    offsetClass: 'md:ml-[26%]',
  },
  {
    roman: 'ÉTAPE IV',
    duration: '36 H',
    title: 'Le Bâti & L’Entoilage',
    detail: 'Assemblage provisoire au fil de soie blanc et piquage du crin sur le revers de poitrine.',
    spec: '14 POINTS PAR CM',
    offsetClass: 'md:ml-[39%]',
  },
  {
    roman: 'ÉTAPE V',
    duration: '22 H',
    title: 'Le Parachèvement',
    detail: 'Repassage à la pattemouille humide, pose de la doublure et numérotation calligraphiée.',
    spec: 'SIGNATURE RUE CAMBON',
    offsetClass: 'md:ml-[52%]',
  },
];

export const Content2: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#a68a64]/30 pb-6 mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64] block mb-2">
              CONTENU N° 02 — PROGRESSION DIAGONALE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">
              L’Escalier du Tailleur
            </h2>
          </div>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#1a1512]/60">
            CHUTE TOTALE : 92 HEURES D’OUVRAGE
          </div>
        </div>

        {/* Diagonal Staircase Container with Continuous SVG Thread */}
        <div className="relative">
          {/* Continuous Diagonal SVG Drafting Thread (Desktop) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 720"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              points="0,30 130,30 130,175 260,175 260,320 390,320 390,465 520,465 520,610"
              fill="none"
              stroke="#a68a64"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <line
              x1="0"
              y1="30"
              x2="520"
              y2="610"
              stroke="#a68a64"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
          </svg>

          <div className="relative z-10 space-y-8 md:space-y-6">
            {STEPS.map((step, index) => (
              <div
                key={step.roman}
                className={`w-full md:w-[46%] ${step.offsetClass} bg-[#faf7f2] border-t border-b border-[#a68a64]/40 py-5 px-5 relative`}
              >
                {/* Stitch intersection node on the threaded spine */}
                <span
                  className="hidden md:flex items-center justify-center w-5 h-5 bg-[#faf7f2] border border-[#a68a64] text-[10px] font-mono text-[#a68a64] absolute -left-2.5 top-6"
                  aria-hidden="true"
                >
                  ×
                </span>

                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#a68a64]">
                    {step.roman}
                  </span>
                  <span className="font-mono text-[11px] tabular-nums text-[#1a1512]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-serif italic text-2xl font-light text-[#1a1512] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs leading-relaxed text-[#1a1512]/75 tracking-wide mb-3">
                  {step.detail}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-dashed border-[#a68a64]/30 text-[9px] font-mono tracking-[0.22em] text-[#1a1512]/55">
                  <span>{step.spec}</span>
                  {index === STEPS.length - 1 ? (
                    <span className="inline-flex items-center space-x-1 text-[#a68a64]">
                      <Scissors size={11} className="stroke-[1.5]" />
                      <span>FIN DE COUPE</span>
                    </span>
                  ) : (
                    <span>PALIER 0{index + 1} →</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

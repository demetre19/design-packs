{/* Artifact: annotated curriculum map | Echo: measure crops through the margin and the notch travels across subject connectors | Interactions: annotations and connector rules shift laterally when a subject is hovered */}
import { Compass, MoveRight } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const positions = [
  'md:left-0 md:top-0',
  'md:left-[24%] md:top-[88px]',
  'md:left-[48%] md:top-[176px]',
  'md:left-[72%] md:top-[264px]'
];
const labelPositions = [
  'md:left-0 md:top-[-18px]',
  'md:left-[24%] md:top-[70px]',
  'md:left-[48%] md:top-[158px]',
  'md:left-[72%] md:top-[246px]'
];

const notes = [
  ['R–2', 'Voice before performance', 'Oral language, movement and early inquiry are treated as serious academic foundations.'],
  ['3–6', 'Evidence becomes visible', 'Students learn to draft, revise, test and defend ideas rather than merely complete work.'],
  ['7–9', 'Choice with structure', 'Breadth is protected while girls begin selecting the problems they want to pursue.'],
  ['10–12', 'Precision and consequence', 'SACE subjects, research practice and mentoring converge around each student’s pathway.']
];

export default function Content3() {
  return (
    <section className="surface-archive bg-paper px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-line bg-ground/80 p-6 md:p-12">
        <EchoMeasure index="03" size="lg" surface="bg-ground" />
        <div className="max-w-xl">
          <div className="type-micro flex items-center gap-2 text-accent"><Compass size={14} /> Curriculum map</div>
          <h2 className="type-editorial mt-4 text-5xl md:text-7xl">The map is not linear. The responsibility is.</h2>
        </div>
        <div className="relative mt-14 min-h-[610px]">
          <div className="absolute left-[11%] top-8 hidden h-[430px] w-px bg-ink/25 md:block" />
          {notes.map((item, i) => (
            <article key={item[0]} className="group relative mb-8 flex flex-col md:mb-0 md:block">
              <div
                className={`relative border border-line bg-paper p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-3 md:absolute md:w-[220px] ${positions[i]}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="type-display text-6xl text-ink/12">{item[0]}</div>
                  <MoveRight className="text-accent opacity-0 transition-all duration-200 ease-crisp group-hover:translate-x-2 group-hover:opacity-100" size={20} />
                </div>
                <h3 className="type-editorial mt-6 text-3xl">{item[1]}</h3>
                <p className="type-body mt-3 text-sm text-secondary">{item[2]}</p>
                <div className="mt-5 h-px w-20 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
              </div>
              <div className={`type-micro hidden text-secondary/70 md:absolute md:block ${labelPositions[i]}`}>MARGIN {String(i+1).padStart(2,'0')}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

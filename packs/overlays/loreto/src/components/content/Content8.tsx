{/* Artifact: uniform issue and fitting slip | Echo: the slip’s cropped archive number is clipped by the perforated edge | Interactions: measurement rules, size tags and marginal fitting notes move laterally on hover */}
import { Ruler, Scissors } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const measures = [
  ['Blazer', 'Size 12', 'sleeve to be released by 2 cm'],
  ['Summer dress', 'Size 10', 'hem checked against academy shoe'],
  ['Sports kit', 'Size M', 'house top allocated after orientation'],
  ['Winter skirt', 'Size 11', 'fit reviewed at start of Term 2']
];

export default function Content8() {
  return (
    <section className="surface-archive bg-paper px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <EchoMeasure index="08" size="lg" surface="bg-paper" />
        <div className="mx-auto max-w-3xl text-center">
          <div className="type-micro flex items-center justify-center gap-2 text-accent"><Scissors size={14} /> Uniform issue slip</div>
          <h2 className="type-editorial mt-4 text-5xl md:text-7xl">Belonging is operational before it is symbolic.</h2>
        </div>
        <div className="relative mt-14 min-h-[650px]">
          <aside className="group absolute left-0 top-10 hidden w-64 border-t border-ink pt-5 lg:block">
            <div className="type-micro text-accent">Fitting note 01</div>
            <p className="type-body mt-3 text-sm text-secondary">The uniform is adjusted to the student. The student is never adjusted to the uniform.</p>
            <div className="mt-4 h-px w-12 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
          </aside>
          <aside className="group absolute bottom-16 right-0 hidden w-72 border-t border-ink pt-5 lg:block">
            <div className="type-micro text-accent">Fitting note 02</div>
            <p className="type-body mt-3 text-sm text-secondary">Precision here removes noise later: no first-day uncertainty, no visible improvisation.</p>
            <div className="mt-4 h-px w-12 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
          </aside>
          <div className="relative mx-auto w-full max-w-md border border-ink bg-ground">
            <div className="absolute inset-y-0 right-6 hidden w-px border-r border-dashed border-line md:block" />
            <div className="border-b border-ink px-5 py-4 md:pr-12">
              <div className="type-micro flex justify-between"><span>Issue slip</span><span>No. 0274</span></div>
            </div>
            <div className="px-5 py-6 md:pr-12">
              {measures.map((item, i) => (
                <article key={item[0]} className="group relative border-b border-dashed border-line py-4 last:border-b-0">
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="type-editorial text-2xl">{item[0]}</h3>
                    <span className="type-micro border border-line bg-paper px-2 py-1 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2">{item[1]}</span>
                  </div>
                  <p className="type-body mt-2 text-xs text-secondary">{item[2]}</p>
                  <div className="mt-3 h-px w-8 bg-accent transition-all duration-200 ease-crisp group-hover:w-2/3" />
                  {i === measures.length - 1 ? <div className="mt-5 flex items-center gap-2 text-secondary"><Ruler size={14} /><span className="type-micro text-[9px]">Final fit checked</span></div> : null}
                </article>
              ))}
            </div>
            <div className="border-t border-dashed border-line px-5 py-4 text-secondary md:pr-12"><span className="type-micro">Parent copy retained below perforation</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

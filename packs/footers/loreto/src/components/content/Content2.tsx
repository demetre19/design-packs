{/* Artifact: annotated assessment transcript | Echo: oversized cropped year measure sits behind the transcript margin | Interactions: grade rules draw laterally and marginal notes slide in on hover */}
import { BadgeCheck } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const results = [
  ['English Literary Studies', 'A+', 'Argument controlled; voice increasingly original.'],
  ['Mathematical Methods', 'A', 'Strong proof discipline under timed conditions.'],
  ['Chemistry', 'A-', 'Precise practical reporting; stronger evaluative language emerging.'],
  ['Modern History', 'A', 'Source criticism is now a genuine strength.']
];

export default function Content2() {
  return (
    <section className="overflow-hidden bg-ink px-5 py-24 text-white md:px-10">
      <div className="relative mx-auto max-w-7xl">
        <EchoMeasure index="02" tone="dark" size="lg" surface="bg-ink" />
        <div className="relative flex min-h-[620px] flex-col md:flex-row">
          <aside className="z-10 md:w-[30%] md:pr-10">
            <div className="type-micro text-accent">Evidence transcript</div>
            <h2 className="type-editorial mt-4 text-5xl md:text-6xl">Results with the teacher’s hand still visible.</h2>
            <p className="type-body mt-5 text-sm text-white/65">2025 SACE evidence is presented as a working transcript: outcome, annotation and next move in the same line of sight.</p>
            <div className="mt-12 hidden h-px w-28 bg-white/25 md:block" />
          </aside>
          <div className="relative mt-12 flex-1 border-l border-white/15 pl-5 md:mt-0 md:pl-14">
            <div className="absolute left-0 top-0 h-full w-px bg-accent" />
            {results.map((item, i) => (
              <article key={item[0]} className="group relative mb-10 flex flex-col gap-4 md:flex-row md:items-start">
                <div className="type-display w-28 text-7xl text-white/10 transition-transform duration-200 ease-crisp group-hover:translate-x-3">{item[1]}</div>
                <div className="flex-1 border-b border-white/15 pb-8">
                  <div className="flex items-start justify-between gap-8">
                    <h3 className="type-editorial max-w-md text-3xl md:text-4xl">{item[0]}</h3>
                    <BadgeCheck className="mt-2 shrink-0 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" size={20} />
                  </div>
                  <p className="type-body mt-3 max-w-lg text-sm text-white/68">{item[2]}</p>
                  <div className="mt-5 h-[3px] w-16 bg-white transition-all duration-200 ease-crisp group-hover:w-40 group-hover:bg-accent" />
                </div>
                <div className="type-micro hidden w-20 text-right text-white/35 md:block">REF {String(i+1).padStart(2,'0')}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

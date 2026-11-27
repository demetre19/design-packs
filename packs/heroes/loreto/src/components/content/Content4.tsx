{/* Artifact: boarding house weekly rota | Echo: cropped weekday measure runs beneath the horizontal rota tape | Interactions: rota tabs travel laterally and their time rules extend on hover */}
import { Clock3, MoonStar } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const rota = [
  ['06:45', 'Wake', 'Boarding staff check the day board before breakfast opens.', 'flex-[0.8]'],
  ['08:10', 'Classes', 'Year 12 leaders walk with the junior cohort across campus.', 'flex-[1.2]'],
  ['16:15', 'Practice', 'Sport, ensemble rehearsal or supervised study by term commitment.', 'flex-[1.1]'],
  ['18:00', 'Dinner', 'Mixed year levels seated deliberately; no year-group silos.', 'flex-[0.9]'],
  ['19:15', 'Prep', 'Quiet study with academic staff and senior peer support.', 'flex-[1.25]'],
  ['21:30', 'Close', 'Phones docked, rooms checked, tomorrow named.', 'flex-[0.75]']
];

export default function Content4() {
  return (
    <section className="bg-ground px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <EchoMeasure index="04" size="lg" surface="bg-ground" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <h2 className="type-editorial max-w-2xl text-5xl md:text-7xl">A boarding day written as one continuous line of care.</h2>
          <p className="type-body max-w-sm text-sm text-secondary md:ml-auto">The house rota is deliberately ordinary. Predictability gives regional and international students the confidence to use their energy elsewhere.</p>
        </div>
        <div className="relative mt-16 hidden min-h-[430px] border-y border-ink md:block">
          <div className="absolute inset-x-0 top-24 h-px bg-ink/30" />
          <div className="flex h-full items-start pt-8">
            {rota.map((item, i) => (
              <article key={item[0]} className={`group relative min-w-0 px-3 ${item[3]}`}>
                <div className="type-micro flex items-center gap-2 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2"><Clock3 size={12} />{item[0]}</div>
                <div className="mt-2 h-16 w-px bg-accent transition-all duration-200 ease-crisp group-hover:translate-x-2" />
                <div className={`border border-line bg-paper p-4 transition-transform duration-200 ease-crisp group-hover:translate-x-3 ${i % 2 ? 'mt-24' : 'mt-4'}`}>
                  <h3 className="type-editorial text-2xl">{item[1]}</h3>
                  <p className="type-body mt-2 text-xs text-secondary">{item[2]}</p>
                  <div className="mt-4 h-[3px] w-8 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 space-y-4 md:hidden">
          {rota.map((item) => <div key={item[0]} className="border border-line bg-paper p-4"><div className="type-micro text-accent">{item[0]}</div><h3 className="type-editorial mt-2 text-2xl">{item[1]}</h3><p className="type-body mt-2 text-xs text-secondary">{item[2]}</p></div>)}
        </div>
        <div className="type-micro mt-6 flex items-center gap-2 text-secondary"><MoonStar size={14} /> House close is non-negotiable; everything before it is supervised but not theatrical.</div>
      </div>
    </section>
  );
}

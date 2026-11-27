{/* Echo: leadership cards crop their sequence numbers and move on hover */}
import { team } from '../../system/content';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

export default function Team1() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="01" eyebrow="Leadership" title="People responsible for the culture, not just the operation." />
        <div className="grid gap-px bg-line md:grid-cols-4">
          {team.map((person, i) => (
            <article key={person.name} className="group relative min-h-[330px] overflow-hidden bg-paper p-6 transition-colors duration-200 ease-crisp hover:bg-white">
              <EchoMeasure index={`0${i + 1}`} size="sm" surface="bg-paper" />
              <div className="h-20 w-20 rounded-full bg-secondary" />
              <h3 className="mt-14 text-2xl font-semibold tracking-[-0.035em]">{person.name}</h3>
              <div className="type-micro mt-2 text-accent">{person.role}</div>
              <p className="type-body mt-4 text-sm text-secondary">{person.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* Echo: team index rows use cropped numerals as quiet seniority markers */}
import { ArrowRight } from 'lucide-react';
import { team } from '../../system/content';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

export default function Team2() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro index="02" eyebrow="Meet the team" title="Experienced leadership, presented without theatre." />
        {team.map((person, i) => (
          <a href="#" key={person.name} className="group relative grid overflow-hidden border-b border-line py-6 transition-colors duration-200 ease-crisp hover:bg-ground md:grid-cols-[90px_1fr_1fr_32px] md:items-center">
            <EchoMeasure index={`0${i + 1}`} size="sm" surface="bg-paper" />
            <div className="type-micro text-accent">0{i + 1}</div>
            <div><div className="text-2xl font-semibold tracking-[-0.035em]">{person.name}</div><div className="text-sm text-secondary">{person.role}</div></div>
            <div className="type-body text-sm text-secondary">{person.focus}</div>
            <ArrowRight className="h-5 w-5 text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" />
          </a>
        ))}
      </div>
    </section>
  );
}

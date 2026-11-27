{/* Echo: horizontal metric rows use small cropped indices and lateral measure movement */}
import { proofStats } from '../../system/content';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

export default function Stats3() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro index="03" eyebrow="Outcomes" title="Numbers that earn their place." />
        {proofStats.slice(0, 3).map((stat, i) => (
          <div key={stat.label} className="group relative grid overflow-hidden border-b border-line py-8 transition-colors duration-200 ease-crisp hover:bg-paper md:grid-cols-[120px_1fr_1fr] md:items-end">
            <EchoMeasure index={`0${i + 1}`} size="sm" surface="bg-ground" />
            <div className="type-editorial text-7xl">{stat.value}</div>
            <div className="type-micro text-accent">{stat.label}</div>
            <div className="type-body text-secondary">{stat.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

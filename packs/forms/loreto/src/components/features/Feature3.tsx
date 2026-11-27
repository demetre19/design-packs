{/* Echo: numbered sequence cards use the cropped measure as their active progression device */}
import { programmes } from '../../system/content';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

export default function Feature3() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="03" eyebrow="How families move" title="A clear path from first visit to first day." copy="The enrolment experience is deliberately legible: enough structure to feel certain, enough warmth to feel personal." />
        <div className="grid gap-px bg-line md:grid-cols-4">
          {['Tour the campus', 'Meet the Principal', 'Accept a place', 'Begin transition'].map((title, i) => (
            <a href="#" key={title} className="group relative min-h-[280px] overflow-hidden bg-white p-6 transition-colors duration-200 ease-crisp hover:bg-ground">
              <EchoMeasure index={`0${i + 1}`} size="sm" surface="bg-white" />
              <div className="type-micro text-accent">Step 0{i + 1}</div>
              <h3 className="type-editorial mt-20 text-3xl">{title}</h3>
              <p className="type-body mt-4 text-sm text-secondary">{programmes[i].copy}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

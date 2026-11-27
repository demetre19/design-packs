{/* Echo: each editorial grid cell carries a cropped programme number and moving rule notch */}
import { programmes } from '../../system/content';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

export default function Feature1() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="01" eyebrow="Learning pathway" title="One continuous education, shaped around girls." />
        <div className="grid border-l border-t border-line md:grid-cols-4">
          {programmes.map((item) => (
            <article key={item.index} className="group relative min-h-[310px] overflow-hidden border-b border-r border-line bg-paper p-6 transition-colors duration-200 ease-crisp hover:bg-white">
              <EchoMeasure index={item.index} size="sm" surface="bg-paper" />
              <div className="type-micro text-accent">{item.meta}</div>
              <h3 className="type-editorial mt-16 text-4xl">{item.title}</h3>
              <p className="type-body mt-4 text-sm text-secondary">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
